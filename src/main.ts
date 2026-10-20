import * as THREE from 'three';
import { Engine } from './core/Engine';
import { CollisionWorld } from './core/CollisionWorld';
import { TextureManager } from './core/TextureManager';
import { PatuxayMonument } from './world/PatuxayMonument';
import { ParkLayout } from './world/ParkLayout';
import { WaterSystem } from './world/WaterSystem';
import { FoliageAndProps } from './world/FoliageAndProps';
import { CatController } from './character/CatController';
import { CoatId } from './character/CatModel';
import { WildlifeAndInteractables } from './systems/WildlifeAndInteractables';
import { AtmosphereAndAudio, TimeOfDay } from './systems/AtmosphereAndAudio';
import {
  HUDAndPhotoMode,
  formatDigitalTime,
  formatLaoMinutesSeconds
} from './ui/HUDAndPhotoMode';

function bootstrap(): void {
  const gameContainer = document.getElementById('game-container')!;
  const hudRoot = document.getElementById('hud-root')!;

  // 1. Core 3D Engine, Collision World & Nano Banana Texture Manager
  const engine = new Engine(gameContainer);
  const collision = new CollisionWorld();
  const textures = new TextureManager(engine.renderer);

  // 2. World Architecture: Patuxay Monument, Park Layout, Water Shaders & Foliage
  const monument = new PatuxayMonument(textures, collision);
  engine.scene.add(monument.group);

  const parkLayout = new ParkLayout(textures, collision);
  engine.scene.add(parkLayout.group);

  const waterSystem = new WaterSystem(textures);
  engine.scene.add(waterSystem.group);

  const foliageAndProps = new FoliageAndProps(textures, collision);
  engine.scene.add(foliageAndProps.group);

  // 3. NekoLao Cat Character & Third-Person Orbital Controller
  const catController = new CatController(
    engine.scene,
    engine.camera,
    collision,
    textures
  );

  // 4. Living Wildlife AI, Collectibles, Atmosphere & Procedural Lao Audio
  const wildlife = new WildlifeAndInteractables(engine.scene);
  const atmosphere = new AtmosphereAndAudio(engine.scene, engine.renderer);

  // 5. Cozy HUD, Timer, Victory SNS Share Modal & Free-Cam Photo Mode
  const hud = new HUDAndPhotoMode(hudRoot);

  // Track checklist & timer states
  let hasSwattedProp = false;
  let announcedArch = false;
  let announcedRooftop = false;
  let announcedFountain = false;
  let elapsedRunSeconds = 0;
  let clearTimeSeconds: number | null = null;
  let hasShownVictoryModal = false;
  let isGameStarted = false;
  let hasSavedProgress = false;

  const isAllCleared = (): boolean => {
    return wildlife.collectedCount >= wildlife.totalFlowers;
  };

  const SAVE_KEY = 'nekolao_save_v1';
  const saveProgress = () => {
    try {
      const payload = {
        collectedIndices: wildlife.getCollectedFlowerIndices(),
        catPos: {
          x: catController.position.x,
          y: catController.position.y,
          z: catController.position.z
        },
        catYaw: catController.yaw,
        cameraYaw: catController.cameraYaw,
        cameraPitch: catController.cameraPitch,
        coat: catController.catModel.currentCoat,
        timeOfDay: atmosphere.currentTimeOfDay,
        hasWalkedUnderArch: catController.hasWalkedUnderArch,
        hasReachedRooftop: catController.hasReachedRooftop,
        hasSplashedFountain: catController.hasSplashedFountain,
        hasSwattedProp,
        koiBattedCount: wildlife.koiBattedCount,
        pigeonsChasedCount: wildlife.pigeonsChasedCount,
        elapsedRunSeconds,
        clearTimeSeconds
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage errors
    }
  };

  // Wire Atmosphere Time-of-Day changes to Monument & Streetlamp lights
  atmosphere.onTimeOfDayChanged = (_tod: TimeOfDay, nightFactor: number) => {
    monument.setNightMode(nightFactor);
    foliageAndProps.setNightMode(nightFactor);
  };
  atmosphere.setTimeOfDay('golden_hour');

  // Restore saved progress if present
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      if (Array.isArray(saved.collectedIndices) && saved.collectedIndices.length > 0) {
        hasSavedProgress = true;
        wildlife.restoreCollectedFlowers(saved.collectedIndices);
      }
      if (saved.catPos && typeof saved.catPos.x === 'number') {
        catController.teleportTo(
          new THREE.Vector3(saved.catPos.x, saved.catPos.y, saved.catPos.z),
          saved.catYaw,
          saved.cameraPitch
        );
        if (typeof saved.cameraYaw === 'number') {
          catController.cameraYaw = saved.cameraYaw;
        }
      }
      if (saved.coat) {
        catController.catModel.setCoat(saved.coat);
      }
      if (saved.timeOfDay) {
        atmosphere.setTimeOfDay(saved.timeOfDay);
      }
      if (saved.hasWalkedUnderArch) {
        catController.hasWalkedUnderArch = true;
        announcedArch = true;
        hasSavedProgress = true;
      }
      if (saved.hasReachedRooftop) {
        catController.hasReachedRooftop = true;
        announcedRooftop = true;
        hasSavedProgress = true;
      }
      if (saved.hasSplashedFountain) {
        catController.hasSplashedFountain = true;
        announcedFountain = true;
        hasSavedProgress = true;
      }
      if (saved.hasSwattedProp) {
        hasSwattedProp = true;
        hasSavedProgress = true;
      }
      if (typeof saved.koiBattedCount === 'number' && saved.koiBattedCount > 0) {
        wildlife.koiBattedCount = saved.koiBattedCount;
        hasSavedProgress = true;
      }
      if (typeof saved.pigeonsChasedCount === 'number' && saved.pigeonsChasedCount > 0) {
        wildlife.pigeonsChasedCount = saved.pigeonsChasedCount;
        hasSavedProgress = true;
      }
      if (typeof saved.elapsedRunSeconds === 'number') {
        elapsedRunSeconds = saved.elapsedRunSeconds;
      }
      if (typeof saved.clearTimeSeconds === 'number') {
        clearTimeSeconds = saved.clearTimeSeconds;
        hasShownVictoryModal = true;
      }
    }
  } catch {
    // Ignore parse errors
  }

  window.addEventListener('beforeunload', saveProgress);

  // Show Game Start Screen on initial load
  hud.showStartModal(hasSavedProgress);

  // Wire Virtual Joystick for Mobile / Touch
  hud.onJoystickMove = (x: number, y: number, sprint: boolean) => {
    catController.setJoystickInput(x, y, sprint);
  };

  // Shared helper to reset the entire game from the beginning (00:00.0)
  const resetToBeginning = () => {
    wildlife.resetAllFlowers();
    foliageAndProps.resetKnockableProps();
    wildlife.koiBattedCount = 0;
    wildlife.pigeonsChasedCount = 0;
    catController.hasWalkedUnderArch = false;
    catController.hasReachedRooftop = false;
    catController.hasSplashedFountain = false;
    hasSwattedProp = false;
    announcedArch = false;
    announcedRooftop = false;
    announcedFountain = false;
    elapsedRunSeconds = 0;
    clearTimeSeconds = null;
    hasShownVictoryModal = false;
    isGameStarted = true;
    hud.resetRunRegistration();
    catController.teleportTo(new THREE.Vector3(2.6, 0.48, -63.4), -0.05, -0.04);
    atmosphere.playCollectSound();
    saveProgress();
    hud.showToast('▶️ ເລີ່ມເກມໃໝ່ຕັ້ງແຕ່ຕົ້ນແລ້ວ! ຈັບເວລາ 00:00.0 ຂໍໃຫ້ໂຊກດີ!');
  };

  // Wire Game Start & Mid-game Restart buttons
  hud.onStartNewGame = () => {
    resetToBeginning();
  };

  hud.onContinueGame = () => {
    isGameStarted = true;
    atmosphere.playCollectSound();
    hud.showToast('⏩ ຫຼິ້ນຕໍ່ຈາກເດີມແລ້ວ!');
  };

  hud.onResetRun = () => {
    resetToBeginning();
  };

  // Wire Download Clear Certificate PNG Card
  hud.onDownloadClearCard = (finalSeconds: number) => {
    try {
      const srcCanvas = engine.renderer.domElement;
      const outCanvas = document.createElement('canvas');
      outCanvas.width = srcCanvas.width;
      outCanvas.height = srcCanvas.height;
      const ctx = outCanvas.getContext('2d')!;

      ctx.drawImage(srcCanvas, 0, 0);

      // Draw stylish golden Lao Victory Banner at bottom
      const bannerH = Math.round(outCanvas.height * 0.24);
      const bannerY = outCanvas.height - bannerH;
      const grad = ctx.createLinearGradient(0, bannerY, 0, outCanvas.height);
      grad.addColorStop(0, 'rgba(20, 14, 10, 0.82)');
      grad.addColorStop(1, 'rgba(20, 14, 10, 0.96)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, bannerY, outCanvas.width, bannerH);

      ctx.strokeStyle = '#ffd166';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, bannerY);
      ctx.lineTo(outCanvas.width, bannerY);
      ctx.stroke();

      ctx.fillStyle = '#ffd166';
      ctx.font = `bold ${Math.round(outCanvas.height * 0.035)}px "Noto Sans Lao", "Fredoka", sans-serif`;
      ctx.fillText(
        '🌼 Issarapon School • ແມວລາວ NekoLao (ສວນປະຕູໄຊ ວຽງຈັນ)',
        36,
        bannerY + bannerH * 0.34
      );

      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${Math.round(outCanvas.height * 0.05)}px "Noto Sans Lao", sans-serif`;
      ctx.fillText(
        `⏱️ ເວລາທີ່ໃຊ້: ${formatLaoMinutesSeconds(finalSeconds)} (${formatDigitalTime(finalSeconds)})`,
        36,
        bannerY + bannerH * 0.76
      );

      ctx.fillStyle = '#9bf6ee';
      ctx.font = `bold ${Math.round(outCanvas.height * 0.03)}px "Noto Sans Lao", sans-serif`;
      ctx.textAlign = 'right';
      ctx.fillText(
        `🌼 ດອກຈຳປາ ${wildlife.collectedCount}/${wildlife.totalFlowers} • ✅ ພາລະກິດຄົບຖ້ວນ`,
        outCanvas.width - 36,
        bannerY + bannerH * 0.76
      );

      const link = document.createElement('a');
      link.download = `nekolao-issarapon-clear-${Math.round(finalSeconds)}s.png`;
      link.href = outCanvas.toDataURL('image/png');
      link.click();
      hud.showToast('🖼️ ບັນທຶກຮູບໃບຢັ້ງຢືນສະຖິຕິສຳເລັດແລ້ວ!');
    } catch {
      hud.showToast('🖼️ ບັນທຶກຮູບສຳເລັດແລ້ວ!');
    }
  };

  // Wire Cat Controller events
  catController.onMeow = () => {
    isGameStarted = true;
    atmosphere.playMeowSound();
    if (wildlife.interactWithKoi(catController.position)) {
      waterSystem.triggerSplash(catController.position);
    }
  };

  catController.onSwat = (pos: THREE.Vector3) => {
    isGameStarted = true;
    atmosphere.playSwatSound();
    const knocked = foliageAndProps.swatNearbyProps(pos, 2.5);
    if (knocked > 0) {
      if (!hasSwattedProp) {
        hasSwattedProp = true;
        hud.showToast('🐾 ແມວຈອມຊົນ! ປັດກະຕ່າດອກໄມ້ບູຊາແລ້ວ!');
      }
    }
    if (wildlife.interactWithKoi(pos)) {
      waterSystem.triggerSplash(pos);
      atmosphere.playSplashSound();
      hud.showToast('🐟 ຕະປົບປາຄາບໃນໜອງບົວແລ້ວ!');
    }
    saveProgress();
  };

  catController.onWaterSplash = (pos: THREE.Vector3) => {
    waterSystem.triggerSplash(pos);
    atmosphere.playSplashSound();
  };

  catController.onClimbUsed = (climbId: string) => {
    isGameStarted = true;
    atmosphere.playCollectSound();
    if (climbId.toLowerCase().includes('up') || catController.position.y > 14) {
      hud.showToast('🏯 ຂຶ້ນສູ່ດາດຟ້າປະຕູໄຊສຳເລັດແລ້ວ!');
    } else if (climbId.toLowerCase().includes('tree') || climbId.toLowerCase().includes('champa')) {
      hud.showToast('🌼 ປີນຂຶ້ນຕົ້ນດອກຈຳປາແລ້ວ!');
    } else {
      hud.showToast('🐾 ກັບລົງມາເດີ່ນປະຕູໄຊແລ້ວ');
    }
    saveProgress();
  };

  // Wire Wildlife events
  wildlife.onFlowerCollected = (count: number, total: number) => {
    isGameStarted = true;
    atmosphere.playCollectSound();
    saveProgress();
    if (count === total) {
      hud.showToast(`🎉 ເກັບດອກຈຳປາຄົບທັງໝົດ ${total} / ${total} ດອກແລ້ວ!`);
    } else {
      hud.showToast(`🌼 ເກັບດອກຈຳປາໄດ້: ${count} / ${total}`);
    }
  };

  wildlife.onKoiBatted = () => {
    waterSystem.triggerSplash(catController.position);
  };

  wildlife.onPigeonScattered = () => {
    if (wildlife.pigeonsChasedCount === 1) {
      hud.showToast('🕊️ ໄລ່ນົກກາງແກບິນຂຶ້ນຟ້າແລ້ວ!');
    }
  };

  // Wire HUD Callbacks
  hud.onSelectCoat = (coat: CoatId) => {
    catController.catModel.setCoat(coat);
    atmosphere.playCollectSound();
    saveProgress();
    const coatNames: Record<CoatId, string> = {
      siamese: 'ແມວວິຊຽນມາດ (Siamese)',
      ginger_tabby: 'ແມວສົ້ມລາຍເສືອແມ່ນ້ຳຂອງ',
      korat: 'ແມວສີສະຫວາດ (Korat)',
      calico: 'ແມວສາມສີນຳໂຊກວຽງຈັນ'
    };
    hud.showToast(`🐾 ປ່ຽນຂົນແມວເປັນ: ${coatNames[coat]}`);
  };

  hud.onSelectTimeOfDay = (tod: TimeOfDay) => {
    atmosphere.setTimeOfDay(tod);
    saveProgress();
    const labels: Record<TimeOfDay, string> = {
      morning: '☀️ ຕອນເຊົ້າຢູ່ວຽງຈັນ — ທ້ອງຟ້າສົດໃສ',
      golden_hour: '🌅 ຍາມແລງຢູ່ສວນປະຕູໄຊ — ແສງສີທອງ',
      night: '🌙 ກາງຄືນຢູ່ວຽງຈັນ — ໄຟປະຕູໄຊ ແລະ ນ້ຳພຸດົນຕີ'
    };
    hud.showToast(labels[tod]);
  };

  hud.onToggleMute = () => {
    return atmosphere.toggleMute();
  };

  hud.onTriggerAction = (action) => {
    if (action === 'meow') {
      catController.triggerMeow();
    } else if (action === 'swat') {
      catController.triggerSwat();
    } else if (action === 'loaf') {
      catController.toggleLoaf();
    } else if (action === 'jump') {
      catController.triggerJump();
    }
  };

  hud.onFastTravel = (dest) => {
    if (dest === 'fountain') {
      catController.teleportTo(new THREE.Vector3(2.6, 0.48, -63.4), -0.05, -0.04);
      hud.showToast('⛲ ຍ້າຍໄປເດີ່ນນ້ຳພຸດົນຕີ');
    } else if (dest === 'archway') {
      catController.teleportTo(new THREE.Vector3(0, 0.78, -5.2), 0, -0.18);
      catController.hasWalkedUnderArch = true;
      hud.showToast('🏛️ ຢູ່ໃຕ້ຊຸ້ມເພດານດອກບົວປະຕູໄຊ');
    } else if (dest === 'rooftop') {
      catController.teleportTo(new THREE.Vector3(2.2, 16.05, 8.8), Math.PI + 0.12, 0.04);
      catController.hasReachedRooftop = true;
      hud.showToast('🏯 ຊົມວິວຈາກດາດຟ້າປະຕູໄຊ!');
    }
    saveProgress();
  };

  hud.onChangeFov = (fov: number) => {
    engine.setBaseFov(fov);
  };

  hud.onCycleCatZoom = () => {
    return catController.cycleCameraZoom();
  };

  hud.onSetCatZoom = (dist: number) => {
    catController.setCameraDistance(dist);
  };

  hud.onSnapPhoto = () => {
    try {
      const dataUrl = engine.renderer.domElement.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `nekolao-patuxay-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      hud.showToast('📸 ບັນທຶກຮູບໂປສກາດສວນປະຕູໄຊແລ້ວ!');
    } catch {
      hud.showToast('📸 ຖ່າຍຮູບໂປສກາດແລ້ວ!');
    }
  };

  // Expose debug API
  (window as unknown as Record<string, unknown>).__NEKOLAO_DEBUG__ = {
    engine,
    collision,
    monument,
    parkLayout,
    waterSystem,
    foliageAndProps,
    catController,
    wildlife,
    atmosphere,
    hud,
    getRunState: () => ({
      elapsedRunSeconds,
      clearTimeSeconds,
      isPaused: hud.isPaused,
      allCleared: isAllCleared()
    })
  };

  // 6. Main Game Loop
  engine.onUpdate((delta: number, elapsed: number) => {
    const isNight = atmosphere.currentTimeOfDay === 'night';
    const paused = hud.isPaused;

    catController.update(delta, elapsed, hud.isPhotoMode, paused);
    monument.update(delta, elapsed);
    waterSystem.update(delta, elapsed, catController.position, isNight);
    if (!paused) {
      foliageAndProps.update(delta, elapsed, catController.position);
      wildlife.update(
        delta,
        elapsed,
        catController.position,
        catController.state === 'swat'
      );
    }
    atmosphere.update(
      delta,
      elapsed,
      catController.position,
      catController.isLoafing
    );

    // Advance timer once game is started and NOT paused until all tasks are cleared
    const clearedNow = isAllCleared();
    let justClearedThisFrame = false;
    if (isGameStarted && !paused && !clearedNow && clearTimeSeconds === null) {
      elapsedRunSeconds += delta;
    } else if (isGameStarted && clearedNow && clearTimeSeconds === null) {
      clearTimeSeconds = Math.max(0.1, elapsedRunSeconds);
      saveProgress();
      if (!hasShownVictoryModal) {
        hasShownVictoryModal = true;
        justClearedThisFrame = true;
      }
    }

    // Milestone toast notifications in Lao
    if (catController.hasWalkedUnderArch && !announcedArch) {
      announcedArch = true;
      hud.showToast('🏛️ ພົບຊຸ້ມດອກບົວໃຕ້ປະຕູໄຊແລ້ວ!');
      saveProgress();
    }
    if (catController.hasReachedRooftop && !announcedRooftop) {
      announcedRooftop = true;
      hud.showToast('🏯 ຂຶ້ນຮອດດາດຟ້າປະຕູໄຊແລ້ວ!');
      saveProgress();
    }
    if (catController.hasSplashedFountain && !announcedFountain) {
      announcedFountain = true;
      hud.showToast('⛲ ຫຼິ້ນນ້ຳໃນອ່າງນ້ຳພຸດົນຕີແລ້ວ!');
      saveProgress();
    }

    hud.updateState({
      flowers: wildlife.collectedCount,
      totalFlowers: wildlife.totalFlowers,
      checklist: {
        underArch: catController.hasWalkedUnderArch,
        splashedFountain: catController.hasSplashedFountain,
        battedKoi: wildlife.koiBattedCount > 0,
        chasedPigeons: wildlife.pigeonsChasedCount > 0,
        swattedProp: hasSwattedProp,
        reachedRooftop: catController.hasReachedRooftop
      },
      promptText: catController.activeClimbPrompt,
      activeNapSpot: wildlife.activeNapSpotLabel,
      isLoafing: catController.isLoafing,
      currentCoat: catController.catModel.currentCoat,
      timeOfDay: atmosphere.currentTimeOfDay,
      elevationY: catController.position.y,
      elapsedSeconds: elapsedRunSeconds,
      isCleared: clearTimeSeconds !== null,
      clearTimeSeconds
    });

    if (justClearedThisFrame && clearTimeSeconds !== null) {
      atmosphere.playCollectSound();
      hud.showVictoryModal(clearTimeSeconds, true);
    }
  });

  engine.start();
}

bootstrap();

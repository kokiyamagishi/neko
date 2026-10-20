import type { TimeOfDay } from '../systems/AtmosphereAndAudio';
import {
  LeaderboardEntry,
  LeaderboardService
} from '../systems/LeaderboardService';

export type CatCoatId = 'siamese' | 'ginger_tabby' | 'korat' | 'calico';

export interface HUDUpdateData {
  flowers: number;
  totalFlowers: number;
  checklist: {
    underArch: boolean;
    splashedFountain: boolean;
    battedKoi: boolean;
    chasedPigeons: boolean;
    swattedProp: boolean;
    reachedRooftop: boolean;
  };
  promptText: string | null;
  activeNapSpot: string | null;
  isLoafing: boolean;
  currentCoat: string;
  timeOfDay: TimeOfDay;
  elevationY: number;
  elapsedSeconds: number;
  isCleared: boolean;
  clearTimeSeconds: number | null;
}

export function formatLaoMinutesSeconds(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds);
  const mins = Math.floor(safe / 60);
  const secs = (safe % 60).toFixed(2);
  const secsPadded = Number(secs) < 10 ? `0${secs}` : secs;
  return `${mins} ນາທີ ${secsPadded} ວິນາທີ`;
}

export function formatDigitalTime(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds);
  const mins = Math.floor(safe / 60)
    .toString()
    .padStart(2, '0');
  const secs = (safe % 60).toFixed(2).padStart(5, '0');
  return `${mins}:${secs}`;
}

export class HUDAndPhotoMode {
  public isPhotoMode = false;
  public readonly leaderboard = new LeaderboardService();

  public onSelectCoat?: (coat: CatCoatId) => void;
  public onSelectTimeOfDay?: (tod: TimeOfDay) => void;
  public onToggleMute?: () => boolean;
  public onTriggerAction?: (action: 'meow' | 'swat' | 'loaf' | 'jump') => void;
  public onFastTravel?: (destination: 'fountain' | 'archway' | 'rooftop') => void;
  public onChangeFov?: (fov: number) => void;
  public onSnapPhoto?: () => void;
  public onJoystickMove?: (x: number, y: number, sprint: boolean) => void;
  public onStartNewGame?: () => void;
  public onContinueGame?: () => void;
  public onResetRun?: () => void;
  public onDownloadClearCard?: (clearSeconds: number) => void;
  public onCycleCatZoom?: () => number;
  public onSetCatZoom?: (dist: number) => void;

  private root: HTMLElement;
  private mainHud: HTMLElement;
  private photoOverlay: HTMLElement;
  private flowerCountEl: HTMLElement;
  private menuFlowerCountEl: HTMLElement;
  private flowerBarFillEl: HTMLElement;
  private timerValueEl: HTMLElement;
  private menuTimerValueEl: HTMLElement;
  private pauseIndicatorEl: HTMLElement;
  private elevationBadgeEl: HTMLElement;
  private promptBannerEl: HTMLElement;
  private toastContainerEl: HTMLElement;
  private menuDialog: HTMLDialogElement;
  private startDialog: HTMLDialogElement;
  private startContinueBtn: HTMLButtonElement;
  private startLeaderboardListEl: HTMLElement;
  private coatDialog: HTMLDialogElement;
  private victoryDialog: HTMLDialogElement;
  private victoryBadgeEl: HTMLElement;
  private victoryTitleEl: HTMLElement;
  private victoryTimeMainEl: HTMLElement;
  private victoryTimeSubEl: HTMLElement;
  private victoryStatFlowersEl: HTMLElement;
  private victoryStatTasksEl: HTMLElement;
  private rankRegisterBoxEl: HTMLElement;
  private rankFormPanelEl: HTMLElement;
  private rankStatusHeadingEl: HTMLElement;
  private rankStatusSubEl: HTMLElement;
  private rankNameInputEl: HTMLInputElement;
  private rankSubmitBtnEl: HTMLButtonElement;
  private rankRegisteredBannerEl: HTMLElement;
  private victoryLeaderboardListEl: HTMLElement;
  private openVictoryBtn: HTMLButtonElement;
  private muteBtn: HTMLButtonElement;
  private checklistProgressEl: HTMLElement;
  private menuChecklistProgressEl: HTMLElement;
  private catZoomSliderEl: HTMLInputElement;
  private checklistItems: Record<string, HTMLElement> = {};
  private todButtons: Record<TimeOfDay, HTMLButtonElement[]> = {
    morning: [],
    golden_hour: [],
    night: []
  };
  private coatButtons: Record<CatCoatId, HTMLButtonElement> = {} as Record<
    CatCoatId,
    HTMLButtonElement
  >;
  private lastClearSeconds = 0;
  private lastFlowers = 0;
  private lastTotalFlowers = 30;
  private lastDoneTasks = 0;
  private lastCoat = 'siamese';
  private hasRegisteredCurrentRun = false;
  private registeredEntryId: string | null = null;
  private registeredRank: number | null = null;
  private registeredPlayerName: string | null = null;

  constructor(rootElement: HTMLElement) {
    this.root = rootElement;
    this.injectStyles();

    this.root.innerHTML = `
      <div class="nl-hud-wrapper" id="nl-main-hud">
        <!-- Minimalist Top HUD Bar: Only Timer, Flower Count, Mission Count + Cat Zoom & Hamburger Menu -->
        <header class="nl-top-bar">
          <button
            type="button"
            class="nl-status-pill"
            id="nl-status-pill-btn"
            title="ແຕະເພື່ອເບິ່ງພາລະກິດ ແລະ ເມນູ"
          >
            <div class="nl-status-metrics">
              <span class="nl-metric-item nl-metric-timer">
                <span class="nl-pause-dot is-hidden" id="nl-pause-indicator">⏸️</span>
                ⏱️ <strong id="nl-timer-value">00:00.0</strong>
              </span>
              <span class="nl-metric-divider">•</span>
              <span class="nl-metric-item nl-metric-flowers">
                🌼 <strong id="nl-flower-count">0/30</strong>
              </span>
              <span class="nl-metric-divider">•</span>
              <span class="nl-metric-item nl-metric-tasks">
                ✅ <strong id="nl-checklist-progress">0/6</strong>
              </span>
            </div>
            <div class="nl-mini-progress-track">
              <div class="nl-mini-progress-fill" id="nl-flower-bar" style="width: 0%"></div>
            </div>
          </button>

          <div class="nl-top-right-btns">
            <button
              type="button"
              class="nl-icon-pill-btn"
              id="nl-fullscreen-btn"
              title="ເຕັມຈໍ (Fullscreen)"
              aria-label="ເຕັມຈໍ"
            >
              ⛶ <span class="nl-btn-text-sm">ເຕັມຈໍ</span>
            </button>
            <button
              type="button"
              class="nl-icon-pill-btn"
              id="nl-zoom-cat-btn"
              title="ຊູມເບິ່ງແມວໃກ້/ໄກ"
              aria-label="ຊູມແມວ"
            >
              🔍 <span class="nl-btn-text-sm">ຊູມແມວ</span>
            </button>
            <button
              type="button"
              class="nl-hamburger-btn"
              id="nl-open-menu-btn"
              title="ເປີດເມນູ & ຢຸດເວລາຊົ່ວຄາວ"
              aria-label="ເມນູ"
            >
              ☰ <span>ເມນູ</span>
            </button>
          </div>
        </header>

        <!-- Mobile & Touch Virtual Thumbstick (Bottom Left) -->
        <div class="nl-joystick-zone" id="nl-joystick-zone" aria-label="ປຸ່ມຄວບຄຸມທິດທາງ">
          <div class="nl-joystick-base" id="nl-joystick-base">
            <div class="nl-joystick-knob" id="nl-joystick-knob">🐾</div>
          </div>
        </div>

        <!-- Bottom Right: Contextual Prompt + Compact Cat Action Buttons -->
        <div class="nl-bottom-dock">
          <div class="nl-prompt-banner is-hidden" id="nl-prompt-banner"></div>

          <div class="nl-glass-card nl-controls-bar">
            <div class="nl-cat-actions">
              <button type="button" class="nl-cat-btn nl-cat-btn-primary" data-action="jump">
                🦘 <span>ໂດດ</span>
              </button>
              <button type="button" class="nl-cat-btn nl-cat-btn-accent" data-action="swat">
                🐾 <span>ຕະປົບ/ປີນ</span>
              </button>
              <button type="button" class="nl-cat-btn" data-action="meow">
                🐱 <span>ຮ້ອງ</span>
              </button>
              <button type="button" class="nl-cat-btn" data-action="loaf">
                ☀️ <span>ນອນ</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Photo Mode Viewfinder Overlay -->
      <div class="nl-photo-overlay is-hidden" id="nl-photo-overlay">
        <div class="nl-viewfinder-grid">
          <div class="nl-vf-corner tl"></div>
          <div class="nl-vf-corner tr"></div>
          <div class="nl-vf-corner bl"></div>
          <div class="nl-vf-corner br"></div>
          <div class="nl-vf-stamp">Issarapon School • ສວນປະຕູໄຊ ນະຄອນຫຼວງວຽງຈັນ</div>
        </div>

        <div class="nl-glass-card nl-photo-controls">
          <div class="nl-photo-control-item">
            <label for="nl-fov-slider">ຊູມກ້ອງ</label>
            <input id="nl-fov-slider" type="range" min="26" max="75" value="50" />
          </div>
          <div class="nl-toolbar-group">
            <button type="button" class="nl-pill-btn" data-tod="morning">ຕອນເຊົ້າ</button>
            <button type="button" class="nl-pill-btn is-active" data-tod="golden_hour">ຍາມແລງ</button>
            <button type="button" class="nl-pill-btn" data-tod="night">ກາງຄືນ</button>
          </div>
          <button type="button" class="nl-snap-btn" id="nl-snap-photo-btn">
            📸 ບັນທຶກຮູບໂປສກາດ
          </button>
          <button type="button" class="nl-action-chip" id="nl-exit-photo-btn">
            ✕ ອອກ
          </button>
        </div>
      </div>

      <!-- Toast Container -->
      <div class="nl-toast-container" id="nl-toast-container" aria-live="polite"></div>

      <!-- Hamburger Menu & Pause Modal (Pauses Gameplay & Stops Timer while open) -->
      <dialog id="menu-dialog" class="nl-menu-dialog" closedby="any" aria-labelledby="menuDialogTitle">
        <div class="nl-dialog-form nl-menu-scroll-body">
          <div class="nl-menu-header">
            <div>
              <span class="nl-pause-badge">⏸️ ຢຸດເກມຊົ່ວຄາວ • ໂມງຈັບເວລາຢຸດແລ້ວ</span>
              <h2 id="menuDialogTitle" class="nl-menu-title">🌼 Issarapon School • ແມວລາວ</h2>
            </div>
            <button type="button" class="nl-dialog-close" id="nl-close-menu-x" aria-label="ປິດເມນູ">✕</button>
          </div>

          <button type="button" class="nl-resume-big-btn" id="nl-resume-menu-btn">
            ▶️ ຫຼິ້ນຕໍ່ (RESUME GAME)
          </button>

          <!-- Current Timer & Flowers Summary inside Menu -->
          <div class="nl-menu-stats-card">
            <div class="nl-menu-stat-box">
              <span class="nl-menu-stat-label">⏱️ ເວລາປັດຈຸບັນ</span>
              <strong class="nl-menu-stat-val" id="nl-menu-timer-value">0 ນາທີ 00.0 ວິນາທີ</strong>
            </div>
            <div class="nl-menu-stat-box">
              <span class="nl-menu-stat-label">🌼 ດອກຈຳປາ</span>
              <strong class="nl-menu-stat-val" id="nl-menu-flower-count">0 / 30</strong>
            </div>
            <div class="nl-menu-stat-box">
              <span class="nl-menu-stat-label">📍 ຕຳແໜ່ງ</span>
              <strong class="nl-menu-stat-val" id="nl-elevation-badge">ເດີ່ນສວນ • 0.0m</strong>
            </div>
          </div>

          <!-- Restart & SNS Share Buttons -->
          <div class="nl-menu-action-row">
            <button type="button" class="nl-restart-btn" id="nl-reset-run-btn">
              🔄 ເລີ່ມໃໝ່ຕັ້ງແຕ່ຕົ້ນ
            </button>
            <button type="button" class="nl-share-hud-btn" id="nl-open-victory-btn">
              🏆 ແຊຣ໌ເວລາ SNS
            </button>
          </div>

          <!-- 6 Cat Checklist Missions -->
          <div class="nl-menu-section">
            <div class="nl-menu-section-head">
              <span>🐾 ພາລະກິດແມວນ້ອຍ</span>
              <span class="nl-checklist-progress" id="nl-menu-checklist-progress">0/6</span>
            </div>
            <ul class="nl-checklist-list" id="nl-checklist-list">
              <li class="nl-check-item" data-check="underArch">
                <span class="nl-check-box"></span>
                <span>ຍ່າງລອດໃຕ້ປະຕູໄຊ</span>
              </li>
              <li class="nl-check-item" data-check="splashedFountain">
                <span class="nl-check-box"></span>
                <span>ຫຼິ້ນນ້ຳໃນອ່າງນ້ຳພຸດົນຕີ</span>
              </li>
              <li class="nl-check-item" data-check="battedKoi">
                <span class="nl-check-box"></span>
                <span>ຕະປົບປາຄາບໃນໜອງບົວ (🐾)</span>
              </li>
              <li class="nl-check-item" data-check="chasedPigeons">
                <span class="nl-check-box"></span>
                <span>ໄລ່ນົກກາງແກໃນເດີ່ນ</span>
              </li>
              <li class="nl-check-item" data-check="swattedProp">
                <span class="nl-check-box"></span>
                <span>ປັດກະຕ່າດອກໄມ້ບູຊາ (🐾)</span>
              </li>
              <li class="nl-check-item" data-check="reachedRooftop">
                <span class="nl-check-box"></span>
                <span>ຂຶ້ນສູ່ດາດຟ້າປະຕູໄຊ</span>
              </li>
            </ul>
          </div>

          <!-- Cat Camera Zoom Slider -->
          <div class="nl-menu-section">
            <div class="nl-menu-section-head">
              <span>🔍 ໄລຍະກ້ອງເບິ່ງແມວ (ຊູມແມວ)</span>
            </div>
            <div class="nl-zoom-slider-row">
              <span>ໃກ້ແມວ</span>
              <input
                id="nl-cat-zoom-slider"
                type="range"
                min="2.0"
                max="6.0"
                step="0.2"
                value="3.3"
              />
              <span>ມຸມກວ້າງ</span>
            </div>
          </div>

          <!-- Atmosphere, Coat, Photo Mode & Sound -->
          <div class="nl-menu-section">
            <div class="nl-menu-section-head">
              <span>🌅 ບັນຍາກາດ & ການຕັ້ງຄ່າ</span>
            </div>
            <div class="nl-toolbar-group" style="margin-bottom: 8px;">
              <span class="nl-group-label">ທ້ອງຟ້າ:</span>
              <button type="button" class="nl-pill-btn" data-tod="morning">☀️ ຕອນເຊົ້າ</button>
              <button type="button" class="nl-pill-btn is-active" data-tod="golden_hour">🌅 ຍາມແລງ</button>
              <button type="button" class="nl-pill-btn" data-tod="night">🌙 ກາງຄືນ</button>
            </div>
            <div class="nl-toolbar-group">
              <button type="button" class="nl-action-chip" id="nl-open-coat-btn">
                🐾 ປ່ຽນຂົນແມວ
              </button>
              <button type="button" class="nl-action-chip" id="nl-photo-mode-btn">
                📷 ໂໝດຖ່າຍຮູບ
              </button>
              <button type="button" class="nl-action-chip" id="nl-mute-btn">
                🔊 ສຽງ
              </button>
              <button type="button" class="nl-action-chip" id="nl-open-start-btn">
                🏠 ໜ້າທຳອິດ
              </button>
            </div>
          </div>

          <!-- Fast Travel Viewpoints -->
          <div class="nl-menu-section">
            <div class="nl-menu-section-head">
              <span>⛲ ຍ້າຍໄປຈຸດຊົມວິວທັນທີ</span>
            </div>
            <div class="nl-toolbar-group">
              <button type="button" class="nl-mini-btn" data-travel="fountain">⛲ ເດີ່ນນ້ຳພຸ</button>
              <button type="button" class="nl-mini-btn" data-travel="archway">🏛️ ໃຕ້ປະຕູໄຊ</button>
              <button type="button" class="nl-mini-btn" data-travel="rooftop">🏯 ດາດຟ້າ (16m)</button>
            </div>
          </div>
        </div>
      </dialog>

      <!-- Center-Screen Game Start Modal (with Pre-Game Top 10 Ranking) -->
      <dialog id="start-dialog" class="nl-start-dialog" aria-labelledby="startDialogTitle">
        <div class="nl-dialog-form nl-victory-content nl-modal-scroll">
          <div class="nl-school-banner">🌼 Issarapon School • ໂຮງຮຽນ ອິດສະຫຼະພອນ 🌼</div>
          <h2 id="startDialogTitle" class="nl-start-title">
            🐾 ແມວລາວ NekoLao
          </h2>
          <p class="nl-victory-subtitle">
            ສຳຫຼວດສວນປະຕູໄຊ ນະຄອນຫຼວງວຽງຈັນ • ເກັບດອກຈຳປາ & ແຂ່ງຈັບເວລາ!
          </p>

          <div class="nl-start-actions">
            <button type="button" class="nl-big-start-btn" id="nl-start-new-btn">
              ▶️ ເລີ່ມເກມ (START GAME)
            </button>
            <button type="button" class="nl-continue-btn is-hidden" id="nl-start-continue-btn">
              ⏩ ຫຼິ້ນຕໍ່ຈາກເດີມ
            </button>
          </div>

          <div class="nl-start-rules-box">
            <div class="nl-rule-item">🌼 <span>ເກັບ <strong>ດອກຈຳປາ 30 ດອກ</strong> ທົ່ວສວນປະຕູໄຊ ແລະ ດາດຟ້າ</span></div>
            <div class="nl-rule-item">🐾 <span>ເຮັດ <strong>ພາລະກິດແມວນ້ອຍ 6 ຂໍ້</strong> ໃຫ້ຄົບຖ້ວນ</span></div>
            <div class="nl-rule-item">🏆 <span>ແຂ່ງຈັບເວລາ <strong>ຕິດອັນດັບ TOP 10</strong> ແລ້ວລົງທະບຽນຊື່ຂອງເຈົ້າ!</span></div>
          </div>

          <!-- Pre-Game Top 10 Leaderboard -->
          <div class="nl-leaderboard-card">
            <div class="nl-leaderboard-header">
              <span>🏆 ຕາຕະລາງຈັດອັນດັບ TOP 10 (RANKING)</span>
              <span class="nl-leaderboard-sub">ເວລາໄວສຸດ</span>
            </div>
            <ol class="nl-leaderboard-list" id="nl-start-leaderboard-list"></ol>
          </div>
        </div>
      </dialog>

      <!-- Native Modal Dialog for Cat Coat Customization (with closedby="any") -->
      <dialog id="coat-dialog" class="nl-coat-dialog" closedby="any" aria-labelledby="coatDialogTitle">
        <form method="dialog" class="nl-dialog-form">
          <div class="nl-dialog-header">
            <div>
              <h2 id="coatDialogTitle" class="nl-dialog-title">ເລືອກລາຍຂົນແມວລາວ</h2>
              <p class="nl-dialog-subtitle">ປ່ຽນສີຂົນແມວວັດ ແລະ ປອກຄໍໄໝລາວ</p>
            </div>
            <button type="submit" class="nl-dialog-close" aria-label="ປິດ">✕</button>
          </div>

          <div class="nl-coat-grid">
            <button type="button" class="nl-coat-option is-selected" data-coat="siamese">
              <span class="nl-coat-swatch swatch-siamese"></span>
              <span class="nl-coat-name">ແມວວິຊຽນມາດ (Siamese)</span>
              <span class="nl-coat-desc">ຂົນສີຄຣີມໄໝລາວ ແຕ້ມສີນ້ຳຕານເຂັ້ມ ແລະ ຕາສີຟ້າມະນີ</span>
            </button>
            <button type="button" class="nl-coat-option" data-coat="ginger_tabby">
              <span class="nl-coat-swatch swatch-ginger"></span>
              <span class="nl-coat-name">ແມວສົ້ມລາຍເສືອແມ່ນ້ຳຂອງ</span>
              <span class="nl-coat-desc">ຂົນສີສົ້ມທອງອົບອຸ່ນ ຕີນສີຂາວນວນ ຕາສີອຳພັນ</span>
            </button>
            <button type="button" class="nl-coat-option" data-coat="korat">
              <span class="nl-coat-swatch swatch-korat"></span>
              <span class="nl-coat-name">ແມວສີສະຫວາດ (Korat)</span>
              <span class="nl-coat-desc">ຂົນສີເທົາຟ້າມົງຄຸນເງົາງາມ ຕາສີຂຽວມໍລະກົດ</span>
            </button>
            <button type="button" class="nl-coat-option" data-coat="calico">
              <span class="nl-coat-swatch swatch-calico"></span>
              <span class="nl-coat-name">ແມວສາມສີນຳໂຊກວຽງຈັນ</span>
              <span class="nl-coat-desc">ຂົນສາມສີ ຂາວ-ສົ້ມ-ດຳ ໜ້າຮັກສົດໃສ</span>
            </button>
          </div>

          <div class="nl-dialog-footer">
            <span>ແຕະດ້ານນອກ ເພື່ອກັບຄືນ</span>
            <button type="submit" class="nl-pill-btn is-active">ຕົກລົງ</button>
          </div>
        </form>
      </dialog>

      <!-- Center-Screen Victory / Ranking Registration, Top 10 & SNS Share Modal (with closedby="any") -->
      <dialog id="victory-dialog" class="nl-victory-dialog" closedby="any" aria-labelledby="victoryDialogTitle">
        <div class="nl-dialog-form nl-victory-content nl-modal-scroll">
          <div class="nl-school-banner">🌼 Issarapon School • ສວນປະຕູໄຊ 🌼</div>
          <div class="nl-victory-badge" id="nl-victory-badge">🏆 ພາລະກິດສຳເລັດຄົບທຸກຂໍ້! 🏆</div>
          <h2 id="victoryDialogTitle" class="nl-victory-title">
            ຊົມເຊີຍ! ສຳຫຼວດສວນປະຕູໄຊສຳເລັດແລ້ວ!
          </h2>
          <p class="nl-victory-subtitle">
            ລົງທະບຽນຊື່ເຂົ້າອັນດັບ TOP 10 ແລະ ແຊຣ໌ໃຫ້ໝູ່ເພື່ອນໃນ SNS ໄດ້ເລີຍ!
          </p>

          <div class="nl-victory-time-box">
            <span class="nl-victory-time-label">⏱️ ເວລາທີ່ໃຊ້ທັງໝົດ (CLEAR TIME)</span>
            <div class="nl-victory-time-main" id="nl-victory-time-main">0 ນາທີ 00.0 ວິນາທີ</div>
            <div class="nl-victory-time-sub" id="nl-victory-time-sub">(00:00.0)</div>
            <div class="nl-victory-stats-row">
              <span class="nl-stat-pill" id="nl-victory-stat-flowers">🌼 ດອກຈຳປາ 30 / 30</span>
              <span class="nl-stat-pill" id="nl-victory-stat-tasks">✅ ພາລະກິດ 6 / 6</span>
            </div>
          </div>

          <!-- Top 10 Ranking Registration Box -->
          <div class="nl-rank-register-box" id="nl-rank-register-box">
            <div class="nl-rank-status-heading" id="nl-rank-status-heading">
              🎉 ຍິນດີດ້ວຍ! ເຈົ້າຕິດອັນດັບທີ #1 ໃນ TOP 10!
            </div>
            <p class="nl-rank-status-sub" id="nl-rank-status-sub">
              ໃສ່ຊື່ຂອງເຈົ້າເພື່ອລົງທະບຽນເຂົ້າຕາຕະລາງຈັດອັນດັບ TOP 10:
            </p>
            <div class="nl-rank-form-panel" id="nl-rank-form-panel">
              <input
                type="text"
                id="nl-rank-name-input"
                class="nl-rank-name-input"
                maxlength="20"
                placeholder="ໃສ່ຊື່ຂອງເຈົ້າ (Your Name)..."
                autocomplete="nickname"
              />
              <button type="button" class="nl-rank-submit-btn" id="nl-rank-submit-btn">
                🏆 ລົງທະບຽນອັນດັບ (REGISTER RANK)
              </button>
            </div>
            <div class="nl-rank-registered-banner is-hidden" id="nl-rank-registered-banner"></div>
          </div>

          <!-- Post-Game Top 10 Leaderboard -->
          <div class="nl-leaderboard-card">
            <div class="nl-leaderboard-header">
              <span>🏆 ຕາຕະລາງຈັດອັນດັບ TOP 10 (RANKING)</span>
              <span class="nl-leaderboard-sub">Issarapon School</span>
            </div>
            <ol class="nl-leaderboard-list" id="nl-victory-leaderboard-list"></ol>
          </div>

          <div class="nl-share-section">
            <div class="nl-share-heading">📣 ແຊຣ໌ເວລາໃຫ້ໝູ່ເພື່ອນໃນ SNS</div>
            <div class="nl-share-buttons">
              <button type="button" class="nl-share-btn share-x" id="nl-share-x-btn">
                𝕏 ແຊຣ໌ລົງ X
              </button>
              <button type="button" class="nl-share-btn share-line" id="nl-share-line-btn">
                💬 ແຊຣ໌ລົງ LINE
              </button>
              <button type="button" class="nl-share-btn share-fb" id="nl-share-fb-btn">
                📘 Facebook
              </button>
              <button type="button" class="nl-share-btn share-native" id="nl-share-native-btn">
                📲 ແຊຣ໌ຜ່ານມືຖື / SNS
              </button>
              <button type="button" class="nl-share-btn share-copy" id="nl-share-copy-btn">
                📋 ກັອບປີ້ຂໍ້ຄວາມ
              </button>
              <button type="button" class="nl-share-btn share-card" id="nl-share-card-btn">
                🖼️ ບັນທຶກຮູບສະຖິຕິ (PNG)
              </button>
            </div>
          </div>

          <div class="nl-dialog-footer nl-victory-footer">
            <button type="button" class="nl-pill-btn" id="nl-victory-newrun-btn">
              🔄 ເລີ່ມໃໝ່ຕັ້ງແຕ່ຕົ້ນ
            </button>
            <button type="button" class="nl-pill-btn is-active" id="nl-victory-close-btn">
              🐾 ເດີນຫຼິ້ນຕໍ່
            </button>
          </div>
        </div>
      </dialog>
    `;

    this.mainHud = this.root.querySelector('#nl-main-hud')!;
    this.photoOverlay = this.root.querySelector('#nl-photo-overlay')!;
    this.flowerCountEl = this.root.querySelector('#nl-flower-count')!;
    this.menuFlowerCountEl = this.root.querySelector('#nl-menu-flower-count')!;
    this.flowerBarFillEl = this.root.querySelector('#nl-flower-bar')!;
    this.timerValueEl = this.root.querySelector('#nl-timer-value')!;
    this.menuTimerValueEl = this.root.querySelector('#nl-menu-timer-value')!;
    this.pauseIndicatorEl = this.root.querySelector('#nl-pause-indicator')!;
    this.elevationBadgeEl = this.root.querySelector('#nl-elevation-badge')!;
    this.promptBannerEl = this.root.querySelector('#nl-prompt-banner')!;
    this.toastContainerEl = this.root.querySelector('#nl-toast-container')!;
    this.menuDialog = this.root.querySelector('#menu-dialog') as HTMLDialogElement;
    this.startDialog = this.root.querySelector('#start-dialog') as HTMLDialogElement;
    this.startContinueBtn = this.root.querySelector('#nl-start-continue-btn') as HTMLButtonElement;
    this.startLeaderboardListEl = this.root.querySelector('#nl-start-leaderboard-list') as HTMLElement;
    this.coatDialog = this.root.querySelector('#coat-dialog') as HTMLDialogElement;
    this.victoryDialog = this.root.querySelector('#victory-dialog') as HTMLDialogElement;
    this.victoryBadgeEl = this.root.querySelector('#nl-victory-badge')!;
    this.victoryTitleEl = this.root.querySelector('#victoryDialogTitle')!;
    this.victoryTimeMainEl = this.root.querySelector('#nl-victory-time-main')!;
    this.victoryTimeSubEl = this.root.querySelector('#nl-victory-time-sub')!;
    this.victoryStatFlowersEl = this.root.querySelector('#nl-victory-stat-flowers')!;
    this.victoryStatTasksEl = this.root.querySelector('#nl-victory-stat-tasks')!;
    this.rankRegisterBoxEl = this.root.querySelector('#nl-rank-register-box') as HTMLElement;
    this.rankFormPanelEl = this.root.querySelector('#nl-rank-form-panel') as HTMLElement;
    this.rankStatusHeadingEl = this.root.querySelector('#nl-rank-status-heading') as HTMLElement;
    this.rankStatusSubEl = this.root.querySelector('#nl-rank-status-sub') as HTMLElement;
    this.rankNameInputEl = this.root.querySelector('#nl-rank-name-input') as HTMLInputElement;
    this.rankSubmitBtnEl = this.root.querySelector('#nl-rank-submit-btn') as HTMLButtonElement;
    this.rankRegisteredBannerEl = this.root.querySelector('#nl-rank-registered-banner') as HTMLElement;
    this.victoryLeaderboardListEl = this.root.querySelector('#nl-victory-leaderboard-list') as HTMLElement;
    this.openVictoryBtn = this.root.querySelector('#nl-open-victory-btn') as HTMLButtonElement;
    this.muteBtn = this.root.querySelector('#nl-mute-btn') as HTMLButtonElement;
    this.checklistProgressEl = this.root.querySelector('#nl-checklist-progress')!;
    this.menuChecklistProgressEl = this.root.querySelector('#nl-menu-checklist-progress')!;
    this.catZoomSliderEl = this.root.querySelector('#nl-cat-zoom-slider') as HTMLInputElement;

    this.bindEvents();
    this.bindVirtualJoystick();
    this.renderLeaderboardLists();
    void this.leaderboard.fetchTop10().then(() => {
      this.renderLeaderboardLists();
    });
  }

  /**
   * Returns true whenever any modal menu (Hamburger Menu, Start Screen, Coat Wardrobe, Victory Screen)
   * or Photo Mode is open so gameplay & the speedrun timer pause automatically.
   */
  public get isPaused(): boolean {
    return (
      this.menuDialog.open ||
      this.startDialog.open ||
      this.coatDialog.open ||
      this.victoryDialog.open ||
      this.isPhotoMode
    );
  }

  public openMenu(): void {
    if (!this.menuDialog.open) {
      this.menuDialog.showModal();
    }
  }

  public closeMenu(): void {
    if (this.menuDialog.open) {
      this.menuDialog.close();
    }
  }

  private toggleFullscreen(): void {
    const doc = document as Document & {
      webkitFullscreenElement?: Element;
      webkitExitFullscreen?: () => Promise<void>;
    };
    const docEl = document.documentElement as HTMLElement & {
      webkitRequestFullscreen?: () => Promise<void>;
    };

    try {
      if (!document.fullscreenElement && !doc.webkitFullscreenElement) {
        if (docEl.requestFullscreen) {
          docEl.requestFullscreen().catch(() => {});
        } else if (docEl.webkitRequestFullscreen) {
          docEl.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen();
        }
      }
    } catch {
      // Ignore fullscreen permission errors
    }
    window.setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
  }

  private bindEvents(): void {
    // Checklist lookup
    this.root.querySelectorAll<HTMLElement>('[data-check]').forEach((el) => {
      const key = el.dataset.check;
      if (key) this.checklistItems[key] = el;
    });

    // Open & Close Hamburger Menu
    const openMenuBtn = this.root.querySelector('#nl-open-menu-btn') as HTMLButtonElement;
    const statusPillBtn = this.root.querySelector('#nl-status-pill-btn') as HTMLButtonElement;
    const closeMenuX = this.root.querySelector('#nl-close-menu-x') as HTMLButtonElement;
    const resumeMenuBtn = this.root.querySelector('#nl-resume-menu-btn') as HTMLButtonElement;
    const fullscreenBtn = this.root.querySelector('#nl-fullscreen-btn') as HTMLButtonElement;

    fullscreenBtn.addEventListener('click', () => {
      this.toggleFullscreen();
      fullscreenBtn.blur();
    });

    openMenuBtn.addEventListener('click', () => {
      this.openMenu();
      openMenuBtn.blur();
    });

    statusPillBtn.addEventListener('click', () => {
      this.openMenu();
      statusPillBtn.blur();
    });

    closeMenuX.addEventListener('click', () => {
      this.closeMenu();
    });

    resumeMenuBtn.addEventListener('click', () => {
      this.closeMenu();
    });

    // Quick Cat Camera Zoom Button & Slider
    const zoomCatBtn = this.root.querySelector('#nl-zoom-cat-btn') as HTMLButtonElement;
    zoomCatBtn.addEventListener('click', () => {
      const newDist = this.onCycleCatZoom?.() ?? 3.3;
      this.catZoomSliderEl.value = String(newDist);
      if (newDist <= 2.4) {
        this.showToast('🔍 ຊູມເຂົ້າໃກ້ແມວລາວ');
      } else if (newDist >= 4.5) {
        this.showToast('🔍 ມຸມກ້ອງກວ້າງ');
      } else {
        this.showToast('🔍 ມຸມກ້ອງປົກກະຕິ');
      }
      zoomCatBtn.blur();
    });

    this.catZoomSliderEl.addEventListener('input', () => {
      this.onSetCatZoom?.(Number(this.catZoomSliderEl.value));
    });

    // Time of Day buttons
    this.root.querySelectorAll<HTMLButtonElement>('[data-tod]').forEach((btn) => {
      const tod = btn.dataset.tod as TimeOfDay;
      this.todButtons[tod].push(btn);
      btn.addEventListener('click', () => {
        this.onSelectTimeOfDay?.(tod);
        btn.blur();
      });
    });

    // Fast Travel buttons (inside menu: close menu on travel so user sees destination immediately)
    this.root.querySelectorAll<HTMLButtonElement>('[data-travel]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const dest = btn.dataset.travel as 'fountain' | 'archway' | 'rooftop';
        this.closeMenu();
        this.onFastTravel?.(dest);
        btn.blur();
      });
    });

    // Cat Action buttons (bind touchstart + pointerdown + click so jumping works while walking/running with the joystick!)
    this.root.querySelectorAll<HTMLButtonElement>('[data-action]').forEach((btn) => {
      let lastFireTime = 0;
      const fireAction = (e: Event) => {
        e.stopPropagation();
        const now = performance.now();
        if (now - lastFireTime < 140) return;
        lastFireTime = now;
        const act = btn.dataset.action as 'meow' | 'swat' | 'loaf' | 'jump';
        this.onTriggerAction?.(act);
        btn.blur();
      };
      btn.addEventListener(
        'touchstart',
        (e) => {
          e.preventDefault();
          fireAction(e);
        },
        { passive: false }
      );
      btn.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'touch') return; // Handled by touchstart
        fireAction(e);
      });
      btn.addEventListener('click', fireAction);
    });

    // Game Start Modal buttons (bind both click and pointerup for instant mobile response)
    const startNewBtn = this.root.querySelector('#nl-start-new-btn') as HTMLButtonElement;
    let lastStartActionTime = 0;
    const handleStartNew = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      const now = performance.now();
      if (now - lastStartActionTime < 400) return;
      lastStartActionTime = now;
      if (this.startDialog.open) {
        this.startDialog.close();
      }
      this.startDialog.removeAttribute('open');
      this.closeMenu();
      window.dispatchEvent(new Event('resize'));
      this.onStartNewGame?.();
    };
    startNewBtn.addEventListener('click', handleStartNew);
    startNewBtn.addEventListener('pointerup', handleStartNew);

    const handleStartContinue = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      const now = performance.now();
      if (now - lastStartActionTime < 400) return;
      lastStartActionTime = now;
      if (this.startDialog.open) {
        this.startDialog.close();
      }
      this.startDialog.removeAttribute('open');
      this.closeMenu();
      window.dispatchEvent(new Event('resize'));
      this.onContinueGame?.();
    };
    this.startContinueBtn.addEventListener('click', handleStartContinue);
    this.startContinueBtn.addEventListener('pointerup', handleStartContinue);

    const openStartBtn = this.root.querySelector('#nl-open-start-btn') as HTMLButtonElement;
    openStartBtn.addEventListener('click', () => {
      this.closeMenu();
      this.showStartModal(true);
      openStartBtn.blur();
    });

    // Mid-game Restart from Beginning button
    const resetRunBtn = this.root.querySelector('#nl-reset-run-btn') as HTMLButtonElement;
    resetRunBtn.addEventListener('click', () => {
      this.closeMenu();
      this.onResetRun?.();
      resetRunBtn.blur();
    });

    // Open Victory / SNS Share Modal button
    this.openVictoryBtn.addEventListener('click', () => {
      this.closeMenu();
      this.showVictoryModal(this.lastClearSeconds);
      this.openVictoryBtn.blur();
    });

    // Coat Dialog Open & Mandatory Light-Dismiss Fallback
    const openCoatBtn = this.root.querySelector('#nl-open-coat-btn') as HTMLButtonElement;
    openCoatBtn.addEventListener('click', () => {
      this.closeMenu();
      this.openCoatModal();
      openCoatBtn.blur();
    });

    // Fallback for browsers without closedby support (from modern-web-guidance)
    const attachLightDismissFallback = (dialogEl: HTMLDialogElement) => {
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        dialogEl.addEventListener('click', (event: MouseEvent) => {
          if (event.target !== dialogEl) return;
          const rect = dialogEl.getBoundingClientRect();
          const isDialogContent =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;
          if (isDialogContent) return;
          dialogEl.close();
        });
      }
    };
    attachLightDismissFallback(this.menuDialog);
    attachLightDismissFallback(this.coatDialog);
    attachLightDismissFallback(this.victoryDialog);

    // Coat selection cards
    this.root.querySelectorAll<HTMLButtonElement>('[data-coat]').forEach((btn) => {
      const coat = btn.dataset.coat as CatCoatId;
      this.coatButtons[coat] = btn;
      btn.addEventListener('click', () => {
        this.onSelectCoat?.(coat);
        this.coatDialog.close();
      });
    });

    // Victory Modal & SNS Share buttons
    const closeVictoryBtn = this.root.querySelector('#nl-victory-close-btn') as HTMLButtonElement;
    closeVictoryBtn.addEventListener('click', () => {
      this.victoryDialog.close();
    });

    const newRunVictoryBtn = this.root.querySelector('#nl-victory-newrun-btn') as HTMLButtonElement;
    newRunVictoryBtn.addEventListener('click', () => {
      this.victoryDialog.close();
      this.onResetRun?.();
    });

    // Top 10 Ranking Registration Input & Button
    const stopKeyPropagation = (e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.key === 'Enter') {
        e.preventDefault();
        void this.handleRegisterRank();
      }
    };
    this.rankNameInputEl.addEventListener('keydown', stopKeyPropagation);
    this.rankNameInputEl.addEventListener('keyup', (e: KeyboardEvent) => e.stopPropagation());

    this.rankSubmitBtnEl.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      void this.handleRegisterRank();
    });

    const shareXBtn = this.root.querySelector('#nl-share-x-btn') as HTMLButtonElement;
    shareXBtn.addEventListener('click', () => {
      const text = this.buildShareMessage();
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });

    const shareLineBtn = this.root.querySelector('#nl-share-line-btn') as HTMLButtonElement;
    shareLineBtn.addEventListener('click', () => {
      const text = this.buildShareMessage();
      const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
        window.location.href
      )}&text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });

    const shareFbBtn = this.root.querySelector('#nl-share-fb-btn') as HTMLButtonElement;
    shareFbBtn.addEventListener('click', () => {
      const text = this.buildShareMessage();
      const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}&quote=${encodeURIComponent(text)}`;
      window.open(fbUrl, '_blank', 'noopener,noreferrer');
    });

    const shareNativeBtn = this.root.querySelector('#nl-share-native-btn') as HTMLButtonElement;
    shareNativeBtn.addEventListener('click', async () => {
      const text = this.buildShareMessage();
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'ແມວລາວ NekoLao • Issarapon School',
            text,
            url: window.location.href
          });
          return;
        } catch {
          // User cancelled or share failed; fall back to copy
        }
      }
      try {
        await navigator.clipboard.writeText(text);
        this.showToast('📋 ກັອບປີ້ຂໍ້ຄວາມສະຖິຕິແລ້ວ!');
      } catch {
        this.showToast('📋 ກຽມຂໍ້ຄວາມແຊຣ໌ແລ້ວ!');
      }
    });

    const shareCopyBtn = this.root.querySelector('#nl-share-copy-btn') as HTMLButtonElement;
    shareCopyBtn.addEventListener('click', async () => {
      const text = this.buildShareMessage();
      try {
        await navigator.clipboard.writeText(text);
        this.showToast('📋 ກັອບປີ້ຂໍ້ຄວາມສະຖິຕິແລ້ວ!');
      } catch {
        this.showToast('📋 ກຽມຂໍ້ຄວາມແຊຣ໌ແລ້ວ!');
      }
    });

    const shareCardBtn = this.root.querySelector('#nl-share-card-btn') as HTMLButtonElement;
    shareCardBtn.addEventListener('click', () => {
      this.onDownloadClearCard?.(this.lastClearSeconds);
    });

    // Photo Mode buttons & FOV slider
    const photoBtn = this.root.querySelector('#nl-photo-mode-btn') as HTMLButtonElement;
    const exitPhotoBtn = this.root.querySelector('#nl-exit-photo-btn') as HTMLButtonElement;
    const snapPhotoBtn = this.root.querySelector('#nl-snap-photo-btn') as HTMLButtonElement;
    const fovSlider = this.root.querySelector('#nl-fov-slider') as HTMLInputElement;

    photoBtn.addEventListener('click', () => {
      this.closeMenu();
      this.togglePhotoMode(true);
      photoBtn.blur();
    });

    exitPhotoBtn.addEventListener('click', () => {
      this.togglePhotoMode(false);
      exitPhotoBtn.blur();
    });

    snapPhotoBtn.addEventListener('click', () => {
      this.onSnapPhoto?.();
      snapPhotoBtn.blur();
    });

    fovSlider.addEventListener('input', () => {
      this.onChangeFov?.(Number(fovSlider.value));
    });

    // Mute button
    this.muteBtn.addEventListener('click', () => {
      const muted = this.onToggleMute?.() ?? false;
      this.updateMuteLabel(muted);
      this.muteBtn.blur();
    });
  }

  private bindVirtualJoystick(): void {
    const zone = this.root.querySelector('#nl-joystick-zone') as HTMLElement;
    const base = this.root.querySelector('#nl-joystick-base') as HTMLElement;
    const knob = this.root.querySelector('#nl-joystick-knob') as HTMLElement;

    let activeTouchId: number | null = null;
    let activeMouseId: number | null = null;
    const maxRadius = 40;

    const updateStick = (clientX: number, clientY: number) => {
      const rect = base.getBoundingClientRect();
      const cx = rect.left + rect.width * 0.5;
      const cy = rect.top + rect.height * 0.5;
      const dx = clientX - cx;
      const dy = clientY - cy;
      const dist = Math.hypot(dx, dy);
      const clampedDist = Math.min(maxRadius, dist);
      const angle = Math.atan2(dy, dx);

      const kx = Math.cos(angle) * clampedDist;
      const ky = Math.sin(angle) * clampedDist;
      knob.style.transform = `translate(${kx}px, ${ky}px)`;

      // Normalize: right is +X, up on screen (-dy) is forward (+Y)
      const normX = kx / maxRadius;
      const normY = -ky / maxRadius;
      const isSprint = clampedDist / maxRadius > 0.78;
      this.onJoystickMove?.(normX, normY, isSprint);
    };

    const resetStick = () => {
      activeTouchId = null;
      activeMouseId = null;
      knob.style.transform = 'translate(0px, 0px)';
      base.classList.remove('is-active');
      this.onJoystickMove?.(0, 0, false);
    };

    // Multi-touch support via Touch Events (allows left thumb on joystick + right thumb tapping Jump simultaneously)
    zone.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        e.stopPropagation();
        if (activeTouchId === null && e.changedTouches.length > 0) {
          const t = e.changedTouches[0];
          activeTouchId = t.identifier;
          base.classList.add('is-active');
          updateStick(t.clientX, t.clientY);
        }
      },
      { passive: true }
    );

    window.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        if (activeTouchId === null) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
          const t = e.changedTouches[i];
          if (t.identifier === activeTouchId) {
            updateStick(t.clientX, t.clientY);
            break;
          }
        }
      },
      { passive: true }
    );

    const endTouchStick = (e: TouchEvent) => {
      if (activeTouchId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === activeTouchId) {
          resetStick();
          break;
        }
      }
    };
    window.addEventListener('touchend', endTouchStick, { passive: true });
    window.addEventListener('touchcancel', endTouchStick, { passive: true });

    // Desktop mouse fallback
    zone.addEventListener('pointerdown', (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      e.stopPropagation();
      activeMouseId = e.pointerId;
      zone.setPointerCapture(e.pointerId);
      base.classList.add('is-active');
      updateStick(e.clientX, e.clientY);
    });

    zone.addEventListener('pointermove', (e: PointerEvent) => {
      if (e.pointerType === 'touch' || e.pointerId !== activeMouseId) return;
      e.stopPropagation();
      updateStick(e.clientX, e.clientY);
    });

    zone.addEventListener('pointerup', (e: PointerEvent) => {
      if (e.pointerType === 'touch' || e.pointerId !== activeMouseId) return;
      resetStick();
    });

    zone.addEventListener('pointercancel', (e: PointerEvent) => {
      if (e.pointerType === 'touch' || e.pointerId !== activeMouseId) return;
      resetStick();
    });
  }

  private getCoatEmoji(coat?: string): string {
    switch (coat) {
      case 'ginger_tabby':
        return '🧡';
      case 'korat':
        return '💙';
      case 'calico':
        return '🎨';
      default:
        return '🐾';
    }
  }

  private escapeHtml(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  private renderLeaderboardLists( entriesOverride?: LeaderboardEntry[]): void {
    const entries = entriesOverride ?? this.leaderboard.getEntries();
    const renderInto = (listEl: HTMLElement) => {
      listEl.innerHTML = entries
        .slice(0, 10)
        .map((item, idx) => {
          const rank = idx + 1;
          const medal =
            rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;
          const isSelf = this.registeredEntryId !== null && item.id === this.registeredEntryId;
          const selfBadge = isSelf ? '<span class="nl-rank-you-badge">ເຈົ້າ (YOU)</span>' : '';
          return `
            <li class="nl-leaderboard-item ${rank <= 3 ? `is-top-${rank}` : ''} ${
            isSelf ? 'is-self' : ''
          }">
              <span class="nl-rank-pos">${medal}</span>
              <span class="nl-rank-player">
                <span class="nl-rank-coat">${this.getCoatEmoji(item.coat)}</span>
                <span class="nl-rank-name">${this.escapeHtml(item.name)}</span>
                ${selfBadge}
              </span>
              <span class="nl-rank-time">${formatDigitalTime(item.timeSeconds)}</span>
            </li>
          `;
        })
        .join('');
    };

    renderInto(this.startLeaderboardListEl);
    renderInto(this.victoryLeaderboardListEl);
  }

  public resetRunRegistration(): void {
    this.hasRegisteredCurrentRun = false;
    this.registeredEntryId = null;
    this.registeredRank = null;
  }

  private async handleRegisterRank(): Promise<void> {
    if (this.hasRegisteredCurrentRun) return;
    const rawName = this.rankNameInputEl.value.trim();
    const playerName = rawName.length > 0 ? rawName : 'ແມວລາວ NekoLao';

    try {
      localStorage.setItem('nekolao_last_player_name', playerName);
    } catch {
      // Ignore storage error
    }

    this.rankSubmitBtnEl.disabled = true;
    this.rankSubmitBtnEl.textContent = '⏳ ກຳລັງບັນທຶກ...';

    try {
      const result = await this.leaderboard.submitScore(
        playerName,
        this.lastClearSeconds,
        this.lastCoat
      );
      this.hasRegisteredCurrentRun = true;
      this.registeredEntryId = result.entry.id;
      this.registeredRank = result.rank;
      this.registeredPlayerName = result.entry.name;

      this.renderLeaderboardLists(result.entries);
      this.updateVictoryRankingUI(this.lastClearSeconds, true);
      this.showToast(
        result.rank
          ? `🏆 ລົງທະບຽນອັນດັບທີ #${result.rank} (${result.entry.name}) ສຳເລັດແລ້ວ!`
          : `🏆 ບັນທຶກສະຖິຕິຂອງ ${result.entry.name} ສຳເລັດແລ້ວ!`
      );
    } finally {
      this.rankSubmitBtnEl.disabled = false;
    }
  }

  private updateVictoryRankingUI(clearSeconds: number, isGameCleared: boolean): void {
    if (!isGameCleared) {
      this.rankRegisterBoxEl.classList.remove('is-top10');
      this.rankFormPanelEl.classList.add('is-hidden');
      this.rankRegisteredBannerEl.classList.add('is-hidden');
      this.rankStatusHeadingEl.textContent = '🏆 ແຂ່ງຈັບເວລາຊິງອັນດັບ TOP 10';
      this.rankStatusSubEl.textContent =
        'ເກັບດອກຈຳປາໃຫ້ຄົບ 30 ດອກ ເພື່ອຜ່ານເກມ ແລະ ລົງທະບຽນຊື່ເຂົ້າຕາຕະລາງຈັດອັນດັບ TOP 10!';
      return;
    }

    if (this.hasRegisteredCurrentRun) {
      this.rankRegisterBoxEl.classList.add('is-top10');
      this.rankFormPanelEl.classList.add('is-hidden');
      this.rankRegisteredBannerEl.classList.remove('is-hidden');
      const rankLabel = this.registeredRank ? `ອັນດັບທີ #${this.registeredRank}` : 'ບັນທຶກແລ້ວ';
      this.rankStatusHeadingEl.textContent = `🎉 ລົງທະບຽນເຂົ້າ TOP 10 ສຳເລັດແລ້ວ!`;
      this.rankStatusSubEl.textContent = `ຊື່ຂອງເຈົ້າປາກົດຢູ່ໃນຕາຕະລາງອັນດັບ TOP 10 ດ້ານລຸ່ມແລ້ວ`;
      this.rankRegisteredBannerEl.textContent = `✅ ${rankLabel} • ${this.registeredPlayerName} (${formatDigitalTime(
        clearSeconds
      )})`;
      return;
    }

    const provisionalRank = this.leaderboard.computeProvisionalRank(clearSeconds);
    if (provisionalRank !== null) {
      this.rankRegisterBoxEl.classList.add('is-top10');
      this.rankFormPanelEl.classList.remove('is-hidden');
      this.rankRegisteredBannerEl.classList.add('is-hidden');
      this.rankStatusHeadingEl.textContent = `🎉 ຕິດອັນດັບ TOP 10! ປັດຈຸບັນເຈົ້າຢູ່ອັນດັບທີ #${provisionalRank}!`;
      this.rankStatusSubEl.textContent = `ໃສ່ຊື່ຂອງເຈົ້າເພື່ອລົງທະບຽນສະຖິຕິອັນດັບທີ #${provisionalRank} (${formatDigitalTime(
        clearSeconds
      )}):`;
      this.rankSubmitBtnEl.textContent = `🏆 ລົງທະບຽນອັນດັບທີ #${provisionalRank} (REGISTER)`;

      if (!this.rankNameInputEl.value) {
        try {
          const savedName = localStorage.getItem('nekolao_last_player_name');
          if (savedName) this.rankNameInputEl.value = savedName;
        } catch {
          // Ignore storage error
        }
      }
    } else {
      const entries = this.leaderboard.getEntries();
      const tenthTime = entries.length >= 10 ? formatDigitalTime(entries[9].timeSeconds) : '09:50.0';
      this.rankRegisterBoxEl.classList.remove('is-top10');
      this.rankFormPanelEl.classList.add('is-hidden');
      this.rankRegisteredBannerEl.classList.add('is-hidden');
      this.rankStatusHeadingEl.textContent = `⏱️ ເວລາຂອງເຈົ້າ: ${formatDigitalTime(clearSeconds)}`;
      this.rankStatusSubEl.textContent = `ສະຖິຕິອັນດັບທີ #10 ປັດຈຸບັນແມ່ນ ${tenthTime} — ລອງຫຼິ້ນອີກຄັ້ງເພື່ອຕິດ TOP 10!`;
    }
  }

  private buildShareMessage(): string {
    const laoTime = formatLaoMinutesSeconds(this.lastClearSeconds);
    const digital = formatDigitalTime(this.lastClearSeconds);
    const rankPrefix =
      this.hasRegisteredCurrentRun && this.registeredRank
        ? `🏆 ຕິດອັນດັບທີ #${this.registeredRank} (${this.registeredPlayerName})! `
        : '';
    return `🐾 ${rankPrefix}ຂ້ອຍຫຼິ້ນເກມ "ແມວລາວ NekoLao (Issarapon School)" ຢູ່ສວນປະຕູໄຊ ວຽງຈັນ ເກັບດອກຈຳປາ ${this.lastFlowers}/${this.lastTotalFlowers} ດອກ ແລະ ພາລະກິດ ${this.lastDoneTasks}/6 ດ້ວຍເວລາ ${laoTime} (${digital})! 🌼✨ #IssaraponSchool #NekoLao #PatuxayPark #Laos`;
  }

  public showStartModal(hasSavedProgress: boolean): void {
    this.startContinueBtn.classList.toggle('is-hidden', !hasSavedProgress);
    this.renderLeaderboardLists();
    void this.leaderboard.fetchTop10().then(() => {
      this.renderLeaderboardLists();
    });
    if (!this.startDialog.open) {
      this.startDialog.showModal();
    }
  }

  public showVictoryModal(clearSeconds: number, isFullClear = false): void {
    this.lastClearSeconds = clearSeconds;
    this.victoryTimeMainEl.textContent = formatLaoMinutesSeconds(clearSeconds);
    this.victoryTimeSubEl.textContent = `(${formatDigitalTime(clearSeconds)})`;
    this.victoryStatFlowersEl.textContent = `🌼 ດອກຈຳປາ ${this.lastFlowers} / ${this.lastTotalFlowers}`;
    this.victoryStatTasksEl.textContent = `✅ ພາລະກິດ ${this.lastDoneTasks} / 6`;

    const isGameCleared = isFullClear || this.lastFlowers >= this.lastTotalFlowers;

    if (this.lastFlowers >= this.lastTotalFlowers && this.lastDoneTasks >= 6) {
      this.victoryBadgeEl.textContent = '🏆 ພາລະກິດສຳເລັດຄົບທຸກຂໍ້! 🏆';
      this.victoryTitleEl.textContent = 'ຊົມເຊີຍ! ສຳຫຼວດສວນປະຕູໄຊສຳເລັດແລ້ວ!';
    } else if (isGameCleared) {
      this.victoryBadgeEl.textContent = '🌼 ຜ່ານເກມແລ້ວ! ເກັບດອກຈຳປາຄົບ 30 ດອກ! 🌼';
      this.victoryTitleEl.textContent = 'ຊົມເຊີຍ! ເກັບດອກຈຳປາຄົບທຸກດອກແລ້ວ!';
    } else {
      this.victoryBadgeEl.textContent = '🏆 ຕາຕະລາງຈັດອັນດັບ TOP 10 & ແຊຣ໌ SNS';
      this.victoryTitleEl.textContent = 'ແມວລາວ NekoLao • Issarapon School';
    }

    this.renderLeaderboardLists();
    this.updateVictoryRankingUI(clearSeconds, isGameCleared);

    void this.leaderboard.fetchTop10().then(() => {
      this.renderLeaderboardLists();
      this.updateVictoryRankingUI(clearSeconds, isGameCleared);
    });

    if (!this.victoryDialog.open) {
      this.victoryDialog.showModal();
    }
  }

  public openCoatModal(): void {
    if (!this.coatDialog.open) {
      this.coatDialog.showModal();
    }
  }

  public updateMuteLabel(muted: boolean): void {
    this.muteBtn.innerHTML = muted ? '🔇 ປິດສຽງ' : '🔊 ສຽງ';
  }

  public togglePhotoMode(force?: boolean): void {
    this.isPhotoMode = force !== undefined ? force : !this.isPhotoMode;
    this.mainHud.classList.toggle('is-hidden', this.isPhotoMode);
    this.photoOverlay.classList.toggle('is-hidden', !this.isPhotoMode);
    if (!this.isPhotoMode) {
      this.onChangeFov?.(50);
      const fovSlider = this.root.querySelector('#nl-fov-slider') as HTMLInputElement | null;
      if (fovSlider) fovSlider.value = '50';
    }
  }

  public showToast(message: string): void {
    const toast = document.createElement('div');
    toast.className = 'nl-toast';
    toast.textContent = message;
    this.toastContainerEl.appendChild(toast);

    window.setTimeout(() => {
      toast.classList.add('is-leaving');
      window.setTimeout(() => toast.remove(), 320);
    }, 2800);
  }

  public updateState(data: HUDUpdateData): void {
    // 1. Update Flower Counter (compact top pill + menu detail)
    this.lastFlowers = data.flowers;
    this.lastTotalFlowers = data.totalFlowers;
    this.lastCoat = data.currentCoat;
    this.flowerCountEl.textContent = `${data.flowers}/${data.totalFlowers}`;
    this.menuFlowerCountEl.textContent = `${data.flowers} / ${data.totalFlowers}`;
    const pct = Math.min(100, Math.round((data.flowers / Math.max(1, data.totalFlowers)) * 100));
    this.flowerBarFillEl.style.width = `${pct}%`;

    // 2. Update Timer (compact digital in top bar + full Lao format inside menu)
    const displaySecs =
      data.isCleared && data.clearTimeSeconds !== null
        ? data.clearTimeSeconds
        : data.elapsedSeconds;
    this.timerValueEl.textContent = formatDigitalTime(displaySecs);
    this.menuTimerValueEl.textContent = formatLaoMinutesSeconds(displaySecs);
    this.timerValueEl.classList.toggle('is-cleared', data.isCleared);
    this.pauseIndicatorEl.classList.toggle('is-hidden', !this.isPaused);
    this.openVictoryBtn.classList.toggle('is-cleared-glow', data.isCleared);
    this.lastClearSeconds = displaySecs;

    // 3. Update Elevation Badge inside Menu
    if (data.elevationY >= 14.5) {
      this.elevationBadgeEl.textContent = `ດາດຟ້າ • ${data.elevationY.toFixed(1)}m`;
    } else if (data.elevationY >= 2.0) {
      this.elevationBadgeEl.textContent = `ປະຕູໄຊ • ${data.elevationY.toFixed(1)}m`;
    } else {
      this.elevationBadgeEl.textContent = `ເດີ່ນສວນ • ${data.elevationY.toFixed(1)}m`;
    }

    // 4. Update Checklist
    let doneCount = 0;
    for (const [key, done] of Object.entries(data.checklist)) {
      if (done) doneCount += 1;
      const el = this.checklistItems[key];
      if (el) {
        el.classList.toggle('is-done', done);
      }
    }
    this.lastDoneTasks = doneCount;
    this.checklistProgressEl.textContent = `${doneCount}/6`;
    this.menuChecklistProgressEl.textContent = `${doneCount}/6`;

    // 5. Update Time of Day active button state
    (['morning', 'golden_hour', 'night'] as TimeOfDay[]).forEach((tod) => {
      for (const btn of this.todButtons[tod]) {
        btn.classList.toggle('is-active', data.timeOfDay === tod);
      }
    });

    // 6. Update Coat Selection
    (Object.keys(this.coatButtons) as CatCoatId[]).forEach((coat) => {
      this.coatButtons[coat]?.classList.toggle('is-selected', data.currentCoat === coat);
    });

    // 7. Contextual Prompt Banner in Lao
    let bannerMessage: string | null = data.promptText;
    if (!bannerMessage && data.activeNapSpot) {
      bannerMessage = data.isLoafing
        ? `☀️ ກຳລັງນອນໝອບຢູ່ ${data.activeNapSpot}`
        : `☀️ ບ່ອນນອນອາບແດດ: ${data.activeNapSpot}`;
    }

    if (bannerMessage) {
      this.promptBannerEl.textContent = bannerMessage;
      this.promptBannerEl.classList.remove('is-hidden');
    } else {
      this.promptBannerEl.classList.add('is-hidden');
    }
  }

  private injectStyles(): void {
    if (document.getElementById('nl-hud-styles')) return;
    const style = document.createElement('style');
    style.id = 'nl-hud-styles';
    style.textContent = `
      .nl-hud-wrapper {
        position: fixed;
        inset: 0;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: max(10px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left));
        z-index: 20;
        touch-action: none;
        font-family: 'Noto Sans Lao', 'Plus Jakarta Sans', sans-serif;
      }
      .nl-hud-wrapper.is-hidden,
      .nl-photo-overlay.is-hidden,
      .nl-prompt-banner.is-hidden,
      .is-hidden {
        display: none !important;
      }

      /* Minimalist Top HUD Bar */
      .nl-top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        width: 100%;
        pointer-events: none;
      }

      .nl-status-pill {
        pointer-events: auto;
        touch-action: manipulation;
        cursor: pointer;
        background: rgba(20, 15, 11, 0.78);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1.5px solid rgba(255, 209, 102, 0.45);
        border-radius: 999px;
        padding: 6px 14px 7px;
        color: #fff9f0;
        font-family: inherit;
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.38);
        transition: border-color 0.16s ease, transform 0.16s ease;
      }
      .nl-status-pill:active {
        transform: scale(0.97);
      }

      .nl-status-metrics {
        display: flex;
        align-items: center;
        gap: 7px;
        font-size: 0.84rem;
        white-space: nowrap;
      }
      .nl-metric-item {
        display: inline-flex;
        align-items: center;
        gap: 3px;
      }
      .nl-metric-timer strong {
        font-family: 'Fredoka', monospace;
        font-size: 0.94rem;
        color: #ffd166;
        font-variant-numeric: tabular-nums;
      }
      .nl-metric-timer strong.is-cleared {
        color: #2ec4b6;
      }
      .nl-metric-flowers strong {
        color: #fff9f0;
        font-weight: 800;
      }
      .nl-metric-tasks strong {
        color: #9bf6ee;
        font-weight: 700;
      }
      .nl-metric-divider {
        color: rgba(255, 209, 102, 0.4);
        font-size: 0.75rem;
      }

      .nl-mini-progress-track {
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.14);
        border-radius: 999px;
        overflow: hidden;
      }
      .nl-mini-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #ff9f1c, #ffd166, #2ec4b6);
        border-radius: 999px;
        transition: width 0.3s ease;
      }

      .nl-top-right-btns {
        display: flex;
        align-items: center;
        gap: 7px;
        pointer-events: auto;
      }

      .nl-icon-pill-btn,
      .nl-hamburger-btn {
        cursor: pointer;
        touch-action: manipulation;
        border-radius: 999px;
        font-family: inherit;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.38);
        transition: transform 0.15s ease, background 0.15s ease;
      }
      .nl-icon-pill-btn {
        background: rgba(20, 15, 11, 0.78);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1.5px solid rgba(255, 209, 102, 0.42);
        color: #fff9f0;
        padding: 8px 12px;
        font-size: 0.82rem;
      }
      .nl-hamburger-btn {
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        border: none;
        color: #1c130c;
        padding: 8px 15px;
        font-size: 0.86rem;
        font-weight: 800;
      }
      .nl-icon-pill-btn:active,
      .nl-hamburger-btn:active {
        transform: scale(0.95);
      }

      .nl-glass-card {
        pointer-events: auto;
        touch-action: manipulation;
        background: rgba(20, 15, 11, 0.75);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 209, 102, 0.36);
        border-radius: 18px;
        padding: 8px 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.38);
        color: #fff9f0;
      }

      /* Virtual Joystick for Mobile / Touch */
      .nl-joystick-zone {
        position: fixed;
        bottom: max(16px, env(safe-area-inset-bottom));
        left: max(16px, env(safe-area-inset-left));
        display: flex;
        flex-direction: column;
        align-items: center;
        pointer-events: auto;
        touch-action: none;
        z-index: 25;
      }
      .nl-joystick-base {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: rgba(24, 18, 14, 0.56);
        backdrop-filter: blur(8px);
        border: 2px solid rgba(255, 209, 102, 0.42);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
      }
      .nl-joystick-base.is-active {
        border-color: #ffd166;
        background: rgba(38, 28, 20, 0.75);
      }
      .nl-joystick-knob {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1d150e;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.45);
        pointer-events: none;
      }

      /* Bottom Right Action Controls */
      .nl-bottom-dock {
        position: fixed;
        bottom: max(16px, env(safe-area-inset-bottom));
        right: max(14px, env(safe-area-inset-right));
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;
        z-index: 22;
        max-width: calc(100vw - 140px);
      }
      .nl-prompt-banner {
        pointer-events: auto;
        background: rgba(158, 27, 36, 0.92);
        border: 1.5px solid #ffd166;
        color: #fff9f0;
        padding: 6px 14px;
        border-radius: 999px;
        font-size: 0.78rem;
        font-weight: 600;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
        text-align: center;
      }
      .nl-controls-bar {
        padding: 7px 9px;
        border-radius: 20px;
      }
      .nl-cat-actions {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 6px;
      }

      .nl-pill-btn,
      .nl-action-chip,
      .nl-mini-btn,
      .nl-cat-btn {
        cursor: pointer;
        touch-action: manipulation;
        border: 1px solid rgba(255, 209, 102, 0.35);
        background: rgba(255, 248, 235, 0.1);
        color: #fff9f0;
        font-family: inherit;
        font-size: 0.78rem;
        font-weight: 700;
        padding: 8px 12px;
        border-radius: 999px;
        transition: transform 0.12s ease, background 0.15s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
      }
      .nl-cat-btn-primary {
        background: rgba(255, 209, 102, 0.24);
        border-color: #ffd166;
        color: #ffd166;
      }
      .nl-cat-btn-accent {
        background: rgba(46, 196, 182, 0.22);
        border-color: rgba(46, 196, 182, 0.65);
        color: #9bf6ee;
      }
      .nl-pill-btn:active,
      .nl-action-chip:active,
      .nl-mini-btn:active,
      .nl-cat-btn:active {
        transform: scale(0.94);
      }
      .nl-pill-btn.is-active {
        background: #ffd166;
        color: #1d150e;
        border-color: #ffd166;
        font-weight: 800;
      }

      /* Hamburger Menu & Pause Dialog */
      .nl-menu-dialog,
      .nl-start-dialog,
      .nl-coat-dialog,
      .nl-victory-dialog {
        pointer-events: auto;
        margin: auto;
        border: 2px solid rgba(255, 209, 102, 0.72);
        border-radius: 22px;
        background: rgba(22, 16, 12, 0.96);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        color: #fff9f0;
        padding: 0;
        max-width: 500px;
        width: calc(100vw - 24px);
        max-height: 88vh;
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.75);
        font-family: 'Noto Sans Lao', 'Plus Jakarta Sans', sans-serif;
      }
      .nl-menu-dialog::backdrop,
      .nl-start-dialog::backdrop,
      .nl-coat-dialog::backdrop,
      .nl-victory-dialog::backdrop {
        background-color: rgba(10, 7, 5, 0.68);
        backdrop-filter: blur(5px);
      }
      .nl-dialog-form {
        pointer-events: auto;
        padding: 18px 20px;
      }
      .nl-menu-scroll-body {
        max-height: 84vh;
        overflow-y: auto;
        touch-action: pan-y;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .nl-menu-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 10px;
      }
      .nl-pause-badge {
        display: inline-block;
        font-size: 0.72rem;
        font-weight: 700;
        color: #9bf6ee;
        background: rgba(46, 196, 182, 0.18);
        border: 1px solid rgba(46, 196, 182, 0.5);
        padding: 2px 9px;
        border-radius: 999px;
        margin-bottom: 4px;
      }
      .nl-menu-title {
        font-size: 1.15rem;
        font-weight: 800;
        color: #ffd166;
      }

      .nl-resume-big-btn {
        cursor: pointer;
        touch-action: manipulation;
        width: 100%;
        padding: 12px 16px;
        border-radius: 14px;
        border: none;
        background: linear-gradient(135deg, #2ec4b6, #209c90);
        color: #0e1716;
        font-family: inherit;
        font-size: 0.98rem;
        font-weight: 800;
        box-shadow: 0 6px 18px rgba(46, 196, 182, 0.35);
      }

      .nl-menu-stats-card {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        background: rgba(255, 248, 235, 0.06);
        border: 1px solid rgba(255, 209, 102, 0.28);
        border-radius: 14px;
        padding: 10px;
      }
      .nl-menu-stat-box {
        display: flex;
        flex-direction: column;
        gap: 2px;
        text-align: center;
      }
      .nl-menu-stat-label {
        font-size: 0.68rem;
        color: #d8c7b0;
      }
      .nl-menu-stat-val {
        font-size: 0.8rem;
        color: #ffd166;
        font-weight: 700;
      }

      .nl-menu-action-row {
        display: flex;
        gap: 8px;
      }
      .nl-restart-btn,
      .nl-share-hud-btn {
        cursor: pointer;
        touch-action: manipulation;
        flex: 1;
        border-radius: 12px;
        padding: 9px 10px;
        font-family: inherit;
        font-size: 0.8rem;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
      }
      .nl-restart-btn {
        background: rgba(255, 159, 28, 0.18);
        border: 1px solid rgba(255, 209, 102, 0.55);
        color: #ffd166;
      }
      .nl-share-hud-btn {
        background: rgba(46, 196, 182, 0.2);
        border: 1px solid rgba(46, 196, 182, 0.6);
        color: #9bf6ee;
      }
      .nl-share-hud-btn.is-cleared-glow {
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1c130c;
        border-color: #ffd166;
      }

      .nl-menu-section {
        background: rgba(255, 248, 235, 0.04);
        border: 1px solid rgba(255, 209, 102, 0.22);
        border-radius: 14px;
        padding: 11px 13px;
      }
      .nl-menu-section-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.82rem;
        font-weight: 700;
        color: #ffd166;
        margin-bottom: 8px;
      }

      .nl-zoom-slider-row {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.76rem;
        color: #e2d4c0;
      }
      .nl-zoom-slider-row input[type='range'] {
        flex: 1;
        accent-color: #ffd166;
      }

      .nl-checklist-progress {
        font-size: 0.76rem;
        color: #9bf6ee;
      }
      .nl-checklist-list {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 7px;
      }
      .nl-check-item {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 0.76rem;
        color: #e7dac8;
      }
      .nl-check-box {
        width: 15px;
        height: 15px;
        border-radius: 4px;
        border: 1.5px solid rgba(255, 209, 102, 0.55);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 0.68rem;
      }
      .nl-check-item.is-done {
        color: #9bf6ee;
        text-decoration: line-through;
        opacity: 0.88;
      }
      .nl-check-item.is-done .nl-check-box {
        background: #2ec4b6;
        border-color: #2ec4b6;
        color: #111;
      }
      .nl-check-item.is-done .nl-check-box::after {
        content: '✓';
        font-weight: 800;
      }

      .nl-toolbar-group {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .nl-group-label {
        font-size: 0.75rem;
        color: #d8c7b0;
        font-weight: 700;
      }

      /* Photo Mode Viewfinder */
      .nl-photo-overlay {
        position: fixed;
        inset: 0;
        z-index: 30;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
      }
      .nl-viewfinder-grid {
        position: relative;
        flex: 1;
        border: 1px solid rgba(255, 249, 240, 0.28);
        border-radius: 12px;
        margin-bottom: 14px;
      }
      .nl-vf-corner {
        position: absolute;
        width: 28px;
        height: 28px;
        border-color: #ffd166;
        border-style: solid;
      }
      .nl-vf-corner.tl { top: -2px; left: -2px; border-width: 3px 0 0 3px; }
      .nl-vf-corner.tr { top: -2px; right: -2px; border-width: 3px 3px 0 0; }
      .nl-vf-corner.bl { bottom: -2px; left: -2px; border-width: 0 0 3px 3px; }
      .nl-vf-corner.br { bottom: -2px; right: -2px; border-width: 0 3px 3px 0; }
      .nl-vf-stamp {
        position: absolute;
        bottom: 12px;
        right: 16px;
        font-size: 0.8rem;
        color: rgba(255, 209, 102, 0.92);
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.65);
      }
      .nl-photo-controls {
        align-self: center;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        border-radius: 24px;
        padding: 10px 16px;
      }
      .nl-photo-control-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.78rem;
      }
      .nl-snap-btn {
        cursor: pointer;
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1c130c;
        border: none;
        padding: 8px 16px;
        border-radius: 999px;
        font-family: inherit;
        font-weight: 700;
        font-size: 0.82rem;
      }

      /* Toast notifications */
      .nl-toast-container {
        position: fixed;
        top: 62px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        gap: 6px;
        z-index: 45;
        pointer-events: none;
        width: max-content;
        max-width: 90vw;
      }
      .nl-toast {
        background: rgba(24, 18, 14, 0.92);
        backdrop-filter: blur(10px);
        border: 1.5px solid #ffd166;
        color: #fff9f0;
        padding: 7px 15px;
        border-radius: 999px;
        font-size: 0.8rem;
        font-weight: 600;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);
        animation: nlToastIn 0.22s ease;
        text-align: center;
      }
      .nl-toast.is-leaving {
        opacity: 0;
        transform: translateY(-6px);
        transition: all 0.25s ease;
      }
      @keyframes nlToastIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .nl-school-banner {
        display: inline-block;
        padding: 5px 14px;
        border-radius: 999px;
        background: linear-gradient(90deg, rgba(90, 22, 32, 0.9), rgba(56, 11, 18, 0.9));
        border: 1.5px solid #ffd166;
        color: #ffd166;
        font-weight: 800;
        font-size: 0.82rem;
        margin-bottom: 10px;
      }
      .nl-start-title {
        font-size: 1.55rem;
        font-weight: 800;
        color: #ffd166;
        margin-bottom: 6px;
      }
      .nl-modal-scroll {
        max-height: 85vh;
        overflow-y: auto;
        touch-action: pan-y;
      }
      .nl-start-rules-box {
        text-align: left;
        background: rgba(255, 248, 235, 0.06);
        border: 1px solid rgba(255, 209, 102, 0.32);
        border-radius: 14px;
        padding: 10px 13px;
        margin-bottom: 12px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .nl-rule-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.78rem;
        color: #f3e8d8;
      }
      .nl-rule-item strong {
        color: #ffd166;
      }
      .nl-start-actions {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 12px;
      }
      .nl-big-start-btn {
        cursor: pointer;
        touch-action: manipulation;
        width: 100%;
        padding: 13px 18px;
        border-radius: 16px;
        border: none;
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1c130c;
        font-family: inherit;
        font-size: 1.04rem;
        font-weight: 800;
        box-shadow: 0 8px 24px rgba(255, 159, 28, 0.42);
      }
      .nl-continue-btn {
        cursor: pointer;
        touch-action: manipulation;
        width: 100%;
        padding: 10px 16px;
        border-radius: 14px;
        border: 1px solid rgba(46, 196, 182, 0.65);
        background: rgba(46, 196, 182, 0.18);
        color: #9bf6ee;
        font-family: inherit;
        font-size: 0.86rem;
        font-weight: 700;
      }

      /* Top 10 Leaderboard Card & List */
      .nl-leaderboard-card {
        text-align: left;
        background: rgba(14, 10, 8, 0.72);
        border: 1.5px solid rgba(255, 209, 102, 0.42);
        border-radius: 16px;
        padding: 11px 13px;
        margin-bottom: 14px;
      }
      .nl-leaderboard-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.82rem;
        font-weight: 800;
        color: #ffd166;
        margin-bottom: 8px;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(255, 209, 102, 0.22);
      }
      .nl-leaderboard-sub {
        font-size: 0.7rem;
        font-weight: 600;
        color: #9bf6ee;
      }
      .nl-leaderboard-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-height: 220px;
        overflow-y: auto;
        touch-action: pan-y;
        padding-right: 2px;
      }
      .nl-leaderboard-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 6px 10px;
        border-radius: 10px;
        background: rgba(255, 248, 235, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.07);
        font-size: 0.78rem;
        color: #f3e8d8;
      }
      .nl-leaderboard-item.is-top-1 {
        background: linear-gradient(90deg, rgba(255, 209, 102, 0.22), rgba(255, 159, 28, 0.1));
        border-color: rgba(255, 209, 102, 0.65);
      }
      .nl-leaderboard-item.is-top-2 {
        background: rgba(226, 232, 240, 0.12);
        border-color: rgba(226, 232, 240, 0.42);
      }
      .nl-leaderboard-item.is-top-3 {
        background: rgba(235, 152, 78, 0.14);
        border-color: rgba(235, 152, 78, 0.45);
      }
      .nl-leaderboard-item.is-self {
        background: linear-gradient(90deg, rgba(46, 196, 182, 0.28), rgba(255, 209, 102, 0.22));
        border: 1.5px solid #2ec4b6;
        box-shadow: 0 0 14px rgba(46, 196, 182, 0.35);
      }
      .nl-rank-pos {
        width: 30px;
        font-weight: 800;
        color: #ffd166;
        flex-shrink: 0;
        text-align: center;
      }
      .nl-rank-player {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
        overflow: hidden;
      }
      .nl-rank-coat {
        flex-shrink: 0;
      }
      .nl-rank-name {
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nl-rank-you-badge {
        flex-shrink: 0;
        font-size: 0.65rem;
        font-weight: 800;
        padding: 1px 6px;
        border-radius: 999px;
        background: #2ec4b6;
        color: #0e1716;
      }
      .nl-rank-time {
        font-family: 'Fredoka', monospace;
        font-weight: 700;
        color: #9bf6ee;
        flex-shrink: 0;
      }

      /* Ranking Registration Box inside Victory Modal */
      .nl-rank-register-box {
        background: rgba(255, 248, 235, 0.06);
        border: 1.5px solid rgba(255, 209, 102, 0.38);
        border-radius: 16px;
        padding: 12px 14px;
        margin-bottom: 14px;
        text-align: center;
      }
      .nl-rank-register-box.is-top10 {
        background: linear-gradient(135deg, rgba(255, 209, 102, 0.2), rgba(46, 196, 182, 0.16));
        border: 2px solid #ffd166;
        box-shadow: 0 8px 24px rgba(255, 159, 28, 0.22);
      }
      .nl-rank-status-heading {
        font-size: 0.94rem;
        font-weight: 800;
        color: #ffd166;
        margin-bottom: 4px;
      }
      .nl-rank-status-sub {
        font-size: 0.76rem;
        color: #e9dccb;
        margin-bottom: 10px;
      }
      .nl-rank-form-panel {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .nl-rank-name-input {
        width: 100%;
        padding: 10px 13px;
        border-radius: 12px;
        border: 1.5px solid rgba(255, 209, 102, 0.75);
        background: rgba(12, 9, 6, 0.88);
        color: #fff9f0;
        font-family: inherit;
        font-size: 0.92rem;
        font-weight: 700;
        text-align: center;
        outline: none;
      }
      .nl-rank-name-input:focus {
        border-color: #2ec4b6;
        box-shadow: 0 0 0 3px rgba(46, 196, 182, 0.28);
      }
      .nl-rank-submit-btn {
        cursor: pointer;
        touch-action: manipulation;
        width: 100%;
        padding: 11px 16px;
        border-radius: 12px;
        border: none;
        background: linear-gradient(135deg, #2ec4b6, #1f9d90);
        color: #0d1716;
        font-family: inherit;
        font-size: 0.9rem;
        font-weight: 800;
        box-shadow: 0 6px 18px rgba(46, 196, 182, 0.35);
      }
      .nl-rank-submit-btn:disabled {
        opacity: 0.65;
        cursor: wait;
      }
      .nl-rank-registered-banner {
        margin-top: 6px;
        padding: 9px 12px;
        border-radius: 12px;
        background: rgba(46, 196, 182, 0.22);
        border: 1.5px solid #2ec4b6;
        color: #9bf6ee;
        font-size: 0.84rem;
        font-weight: 800;
      }

      .nl-dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 14px;
      }
      .nl-dialog-title {
        font-size: 1.2rem;
        color: #ffd166;
      }
      .nl-dialog-subtitle {
        font-size: 0.8rem;
        color: #d8c7b0;
        margin-top: 2px;
      }
      .nl-dialog-close {
        cursor: pointer;
        touch-action: manipulation;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.1);
        color: #fff9f0;
        font-size: 0.95rem;
        flex-shrink: 0;
      }
      .nl-coat-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-bottom: 16px;
      }
      .nl-coat-option {
        cursor: pointer;
        touch-action: manipulation;
        text-align: left;
        padding: 12px;
        border-radius: 14px;
        border: 1.5px solid rgba(255, 209, 102, 0.25);
        background: rgba(255, 248, 235, 0.05);
        color: #fff9f0;
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-family: inherit;
      }
      .nl-coat-option.is-selected {
        border-color: #ffd166;
        background: rgba(255, 209, 102, 0.18);
      }
      .nl-coat-swatch {
        width: 34px;
        height: 18px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .swatch-siamese { background: linear-gradient(90deg, #f5ead8 60%, #4b3224 100%); }
      .swatch-ginger { background: linear-gradient(90deg, #e88331 65%, #fff8ee 100%); }
      .swatch-korat { background: linear-gradient(90deg, #6d7f93, #4a596b); }
      .swatch-calico { background: linear-gradient(90deg, #fff5e6 33%, #e37b2f 33%, #e37b2f 66%, #362821 66%); }
      .nl-coat-name {
        font-weight: 700;
        font-size: 0.84rem;
        color: #ffd166;
      }
      .nl-coat-desc {
        font-size: 0.72rem;
        color: #d9cbb8;
        line-height: 1.3;
      }
      .nl-dialog-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.75rem;
        color: #cbbba6;
        gap: 10px;
      }

      /* Victory / Clear Time Modal */
      .nl-victory-content {
        text-align: center;
      }
      .nl-victory-badge {
        display: inline-block;
        padding: 4px 13px;
        border-radius: 999px;
        background: rgba(46, 196, 182, 0.18);
        border: 1px solid #2ec4b6;
        color: #9bf6ee;
        font-weight: 700;
        font-size: 0.78rem;
        margin-bottom: 8px;
      }
      .nl-victory-title {
        font-size: 1.25rem;
        color: #fff9f0;
        margin-bottom: 6px;
      }
      .nl-victory-subtitle {
        font-size: 0.82rem;
        color: #dfd0bc;
        margin-bottom: 12px;
      }
      .nl-victory-time-box {
        background: linear-gradient(135deg, rgba(255, 209, 102, 0.16), rgba(46, 196, 182, 0.14));
        border: 2px solid #ffd166;
        border-radius: 18px;
        padding: 12px 14px;
        margin-bottom: 12px;
      }
      .nl-victory-time-label {
        font-size: 0.78rem;
        color: #ffd166;
        font-weight: 600;
      }
      .nl-victory-time-main {
        font-size: 1.7rem;
        font-weight: 800;
        color: #fff9f0;
        margin: 4px 0 2px;
      }
      .nl-victory-time-sub {
        font-family: 'Fredoka', monospace;
        font-size: 0.92rem;
        color: #9bf6ee;
        margin-bottom: 8px;
      }
      .nl-victory-stats-row {
        display: flex;
        justify-content: center;
        gap: 8px;
        flex-wrap: wrap;
      }
      .nl-stat-pill {
        padding: 4px 10px;
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-size: 0.76rem;
        font-weight: 600;
      }
      .nl-share-section {
        margin-bottom: 16px;
      }
      .nl-share-heading {
        font-size: 0.8rem;
        color: #ffd166;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .nl-share-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 7px;
      }
      .nl-share-btn {
        cursor: pointer;
        touch-action: manipulation;
        border: 1px solid rgba(255, 209, 102, 0.45);
        border-radius: 12px;
        padding: 8px 12px;
        font-family: inherit;
        font-size: 0.78rem;
        font-weight: 700;
        color: #fff9f0;
        background: rgba(255, 255, 255, 0.1);
      }
      .nl-share-btn.share-x { background: rgba(20, 23, 26, 0.85); }
      .nl-share-btn.share-line { background: rgba(6, 199, 85, 0.28); border-color: #06c755; }
      .nl-share-btn.share-fb { background: rgba(24, 119, 242, 0.32); border-color: #4ea1ff; }
      .nl-share-btn.share-native { background: rgba(155, 81, 224, 0.28); border-color: #c084fc; }
      .nl-share-btn.share-card {
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1c130c;
        border: none;
      }
      .nl-victory-footer {
        justify-content: center;
        gap: 12px;
      }

      /* Small Mobile Viewports */
      @media (max-width: 640px) {
        .nl-btn-text-sm {
          display: none;
        }
        .nl-status-pill {
          padding: 5px 11px 6px;
        }
        .nl-status-metrics {
          font-size: 0.78rem;
          gap: 5px;
        }
        .nl-metric-timer strong {
          font-size: 0.86rem;
        }
        .nl-icon-pill-btn {
          padding: 7px 10px;
        }
        .nl-hamburger-btn {
          padding: 7px 12px;
          font-size: 0.8rem;
        }
        .nl-joystick-base {
          width: 90px;
          height: 90px;
        }
        .nl-joystick-knob {
          width: 38px;
          height: 38px;
          font-size: 1rem;
        }
        .nl-cat-btn {
          font-size: 0.74rem;
          padding: 7px 10px;
        }
        .nl-checklist-list,
        .nl-coat-grid {
          grid-template-columns: 1fr;
        }
        .nl-menu-stats-card {
          grid-template-columns: 1fr;
          gap: 4px;
        }
        .nl-menu-stat-box {
          flex-direction: row;
          justify-content: space-between;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

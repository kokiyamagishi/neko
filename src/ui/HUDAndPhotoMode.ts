import type { TimeOfDay } from '../systems/AtmosphereAndAudio';

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
  const secs = (safe % 60).toFixed(1);
  const secsPadded = Number(secs) < 10 ? `0${secs}` : secs;
  return `${mins} ນາທີ ${secsPadded} ວິນາທີ`;
}

export function formatDigitalTime(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds);
  const mins = Math.floor(safe / 60)
    .toString()
    .padStart(2, '0');
  const secs = (safe % 60).toFixed(1).padStart(4, '0');
  return `${mins}:${secs}`;
}

export class HUDAndPhotoMode {
  public isPhotoMode = false;

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

  private root: HTMLElement;
  private mainHud: HTMLElement;
  private photoOverlay: HTMLElement;
  private flowerCountEl: HTMLElement;
  private flowerBarFillEl: HTMLElement;
  private timerValueEl: HTMLElement;
  private elevationBadgeEl: HTMLElement;
  private promptBannerEl: HTMLElement;
  private toastContainerEl: HTMLElement;
  private startDialog: HTMLDialogElement;
  private startContinueBtn: HTMLButtonElement;
  private coatDialog: HTMLDialogElement;
  private victoryDialog: HTMLDialogElement;
  private victoryBadgeEl: HTMLElement;
  private victoryTitleEl: HTMLElement;
  private victoryTimeMainEl: HTMLElement;
  private victoryTimeSubEl: HTMLElement;
  private victoryStatFlowersEl: HTMLElement;
  private victoryStatTasksEl: HTMLElement;
  private openVictoryBtn: HTMLButtonElement;
  private muteBtn: HTMLButtonElement;
  private checklistCardEl: HTMLElement;
  private checklistProgressEl: HTMLElement;
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

  constructor(rootElement: HTMLElement) {
    this.root = rootElement;
    this.injectStyles();

    this.root.innerHTML = `
      <div class="nl-hud-wrapper" id="nl-main-hud">
        <!-- Top Left: Brand, Timer, Dok Champa Counter, Restart Button & Park Checklist -->
        <aside class="nl-left-column">
          <div class="nl-glass-card nl-brand-card">
            <div class="nl-brand-header">
              <div>
                <h1 class="nl-title">ແມວລາວ NekoLao</h1>
                <p class="nl-subtitle">🌼 Issarapon School • ສວນປະຕູໄຊ</p>
              </div>
              <span class="nl-elevation-badge" id="nl-elevation-badge">ເດີ່ນສວນ • 0.0 ແມັດ</span>
            </div>

            <div class="nl-timer-row">
              <span class="nl-timer-label">⏱️ ເວລາ:</span>
              <strong class="nl-timer-value" id="nl-timer-value">0 ນາທີ 00.0 ວິນາທີ</strong>
              <button type="button" class="nl-mini-icon-btn" id="nl-open-start-btn" title="ໜ້າເລີ່ມເກມ">
                🏠
              </button>
            </div>

            <div class="nl-flower-progress">
              <div class="nl-flower-row">
                <span class="nl-flower-icon" aria-hidden="true">🌼</span>
                <span class="nl-flower-label">ດອກຈຳປາ</span>
                <strong class="nl-flower-count" id="nl-flower-count">0 / 30</strong>
              </div>
              <div class="nl-progress-track">
                <div class="nl-progress-fill" id="nl-flower-bar" style="width: 0%"></div>
              </div>
            </div>

            <div class="nl-game-control-row">
              <button type="button" class="nl-restart-btn" id="nl-reset-run-btn" title="ເລີ່ມຫຼິ້ນໃໝ່ຕັ້ງແຕ່ຕົ້ນ">
                🔄 ເລີ່ມໃໝ່ຕັ້ງແຕ່ຕົ້ນ
              </button>
              <button type="button" class="nl-share-hud-btn" id="nl-open-victory-btn" title="ເບິ່ງເວລາ & ແຊຣ໌ລົງ SNS">
                🏆 ແຊຣ໌ SNS
              </button>
            </div>
          </div>

          <div class="nl-glass-card nl-checklist-card" id="nl-checklist-card" aria-label="ພາລະກິດແມວນ້ອຍ">
            <button type="button" class="nl-card-heading-btn" id="nl-toggle-checklist-btn">
              <span>ພາລະກິດແມວນ້ອຍ</span>
              <span class="nl-checklist-progress" id="nl-checklist-progress">0/6 ▾</span>
            </button>
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
                <span>ຕະປົບປາຄາບໃນໜອງບົວ <kbd>F</kbd></span>
              </li>
              <li class="nl-check-item" data-check="chasedPigeons">
                <span class="nl-check-box"></span>
                <span>ໄລ່ນົກກາງແກໃນເດີ່ນ</span>
              </li>
              <li class="nl-check-item" data-check="swattedProp">
                <span class="nl-check-box"></span>
                <span>ປັດກະຕ່າດອກໄມ້ບູຊາ <kbd>F</kbd></span>
              </li>
              <li class="nl-check-item" data-check="reachedRooftop">
                <span class="nl-check-box"></span>
                <span>ຂຶ້ນສູ່ດາດຟ້າປະຕູໄຊ</span>
              </li>
            </ul>
          </div>
        </aside>

        <!-- Top Right: Atmosphere, Fast Travel, Wardrobe & Photo Mode -->
        <aside class="nl-right-column">
          <div class="nl-glass-card nl-toolbar-card">
            <div class="nl-toolbar-group">
              <span class="nl-group-label">ທ້ອງຟ້າ</span>
              <button type="button" class="nl-pill-btn" data-tod="morning">ຕອນເຊົ້າ</button>
              <button type="button" class="nl-pill-btn is-active" data-tod="golden_hour">ຍາມແລງ</button>
              <button type="button" class="nl-pill-btn" data-tod="night">ກາງຄືນ</button>
            </div>
            <div class="nl-toolbar-divider"></div>
            <div class="nl-toolbar-group">
              <button type="button" class="nl-action-chip" id="nl-open-coat-btn">
                🐾 ຂົນແມວ <kbd>C</kbd>
              </button>
              <button type="button" class="nl-action-chip" id="nl-photo-mode-btn">
                📷 ຖ່າຍຮູບ <kbd>P</kbd>
              </button>
              <button type="button" class="nl-action-chip" id="nl-mute-btn" aria-label="ເປີດ/ປິດສຽງ">
                🔊 ສຽງ <kbd>M</kbd>
              </button>
            </div>
          </div>

          <div class="nl-glass-card nl-travel-card">
            <span class="nl-group-label">ຈຸດຊົມວິວ</span>
            <button type="button" class="nl-mini-btn" data-travel="fountain">ເດີ່ນນ້ຳພຸ</button>
            <button type="button" class="nl-mini-btn" data-travel="archway">ໃຕ້ປະຕູໄຊ</button>
            <button type="button" class="nl-mini-btn" data-travel="rooftop">ດາດຟ້າ (16m)</button>
          </div>
        </aside>

        <!-- Mobile & Touch Virtual Thumbstick (Bottom Left) -->
        <div class="nl-joystick-zone" id="nl-joystick-zone" aria-label="ປຸ່ມຄວບຄຸມທິດທາງ">
          <div class="nl-joystick-base" id="nl-joystick-base">
            <div class="nl-joystick-Ring"></div>
            <div class="nl-joystick-knob" id="nl-joystick-knob">🐾</div>
          </div>
          <span class="nl-joystick-hint">ລາກເພື່ອຍ່າງ / ແລ່ນ</span>
        </div>

        <!-- Bottom Center/Right: Contextual Prompt + Cat Action Bar -->
        <div class="nl-bottom-dock">
          <div class="nl-prompt-banner is-hidden" id="nl-prompt-banner"></div>

          <div class="nl-glass-card nl-controls-bar">
            <div class="nl-move-hint">
              <kbd>WASD</kbd> ຍ່າງ
              <kbd>Shift</kbd> ແລ່ນໄວ
              <kbd>ລາກ</kbd> ໝຸນກ້ອງ
            </div>
            <div class="nl-toolbar-divider nl-desktop-only"></div>
            <div class="nl-cat-actions">
              <button type="button" class="nl-cat-btn" data-action="jump">
                🦘 ໂດດ <kbd>Space</kbd>
              </button>
              <button type="button" class="nl-cat-btn" data-action="meow">
                🐱 ຮ້ອງແມວ <kbd>E</kbd>
              </button>
              <button type="button" class="nl-cat-btn" data-action="swat">
                🐾 ຕະປົບ/ປີນ <kbd>F</kbd>
              </button>
              <button type="button" class="nl-cat-btn" data-action="loaf">
                ☀️ ນອນໝອບ <kbd>Q</kbd>
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
            ✕ ອອກ <kbd>P</kbd>
          </button>
        </div>
      </div>

      <!-- Toast Container -->
      <div class="nl-toast-container" id="nl-toast-container" aria-live="polite"></div>

      <!-- Center-Screen Game Start Modal -->
      <dialog id="start-dialog" class="nl-start-dialog" aria-labelledby="startDialogTitle">
        <div class="nl-dialog-form nl-victory-content">
          <div class="nl-school-banner">🌼 Issarapon School • ໂຮງຮຽນ ອິດສະຫຼະພອນ 🌼</div>
          <h2 id="startDialogTitle" class="nl-start-title">
            🐾 ແມວລາວ NekoLao
          </h2>
          <p class="nl-victory-subtitle">
            ສຳຫຼວດສວນປະຕູໄຊ ນະຄອນຫຼວງວຽງຈັນ • ເກັບດອກຈຳປາ & ແຂ່ງຈັບເວລາ!
          </p>

          <div class="nl-start-rules-box">
            <div class="nl-rule-item">🌼 <span>ເກັບ <strong>ດອກຈຳປາ 30 ດອກ</strong> ທົ່ວສວນປະຕູໄຊ ແລະ ດາດຟ້າ</span></div>
            <div class="nl-rule-item">🐾 <span>ເຮັດ <strong>ພາລະກິດແມວນ້ອຍ 6 ຂໍ້</strong> ໃຫ້ຄົບຖ້ວນ</span></div>
            <div class="nl-rule-item">⏱️ <span>ວັດເວລາຕັ້ງແຕ່ເລີ່ມເກມ ຈົນຜ່ານຄົບທຸກຂໍ້ ແລ້ວແຊຣ໌ສະຖິຕິລົງ SNS!</span></div>
          </div>

          <div class="nl-start-actions">
            <button type="button" class="nl-big-start-btn" id="nl-start-new-btn">
              ▶️ ເລີ່ມເກມ (START GAME)
            </button>
            <button type="button" class="nl-continue-btn is-hidden" id="nl-start-continue-btn">
              ⏩ ຫຼິ້ນຕໍ່ຈາກເດີມ
            </button>
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
            <span>ແຕະດ້ານນອກ ຫຼື ກົດ <kbd>Esc</kbd> ເພື່ອກັບຄືນ</span>
            <button type="submit" class="nl-pill-btn is-active">ຕົກລົງ</button>
          </div>
        </form>
      </dialog>

      <!-- Center-Screen Victory / Clear Time & SNS Share Modal (with closedby="any") -->
      <dialog id="victory-dialog" class="nl-victory-dialog" closedby="any" aria-labelledby="victoryDialogTitle">
        <div class="nl-dialog-form nl-victory-content">
          <div class="nl-school-banner">🌼 Issarapon School • ສວນປະຕູໄຊ 🌼</div>
          <div class="nl-victory-badge" id="nl-victory-badge">🏆 ພາລະກິດສຳເລັດຄົບທຸກຂໍ້! 🏆</div>
          <h2 id="victoryDialogTitle" class="nl-victory-title">
            ຊົມເຊີຍ! ສຳຫຼວດສວນປະຕູໄຊສຳເລັດແລ້ວ!
          </h2>
          <p class="nl-victory-subtitle">
            ບັນທຶກເວລາຂອງເຈົ້າ ແລະ ແຊຣ໌ໃຫ້ໝູ່ເພື່ອນໃນ SNS ໄດ້ເລີຍ!
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
    this.flowerBarFillEl = this.root.querySelector('#nl-flower-bar')!;
    this.timerValueEl = this.root.querySelector('#nl-timer-value')!;
    this.elevationBadgeEl = this.root.querySelector('#nl-elevation-badge')!;
    this.promptBannerEl = this.root.querySelector('#nl-prompt-banner')!;
    this.toastContainerEl = this.root.querySelector('#nl-toast-container')!;
    this.startDialog = this.root.querySelector('#start-dialog') as HTMLDialogElement;
    this.startContinueBtn = this.root.querySelector('#nl-start-continue-btn') as HTMLButtonElement;
    this.coatDialog = this.root.querySelector('#coat-dialog') as HTMLDialogElement;
    this.victoryDialog = this.root.querySelector('#victory-dialog') as HTMLDialogElement;
    this.victoryBadgeEl = this.root.querySelector('#nl-victory-badge')!;
    this.victoryTitleEl = this.root.querySelector('#victoryDialogTitle')!;
    this.victoryTimeMainEl = this.root.querySelector('#nl-victory-time-main')!;
    this.victoryTimeSubEl = this.root.querySelector('#nl-victory-time-sub')!;
    this.victoryStatFlowersEl = this.root.querySelector('#nl-victory-stat-flowers')!;
    this.victoryStatTasksEl = this.root.querySelector('#nl-victory-stat-tasks')!;
    this.openVictoryBtn = this.root.querySelector('#nl-open-victory-btn') as HTMLButtonElement;
    this.muteBtn = this.root.querySelector('#nl-mute-btn') as HTMLButtonElement;
    this.checklistCardEl = this.root.querySelector('#nl-checklist-card')!;
    this.checklistProgressEl = this.root.querySelector('#nl-checklist-progress')!;

    this.bindEvents();
    this.bindVirtualJoystick();
  }

  private bindEvents(): void {
    // Checklist lookup
    this.root.querySelectorAll<HTMLElement>('[data-check]').forEach((el) => {
      const key = el.dataset.check;
      if (key) this.checklistItems[key] = el;
    });

    // Checklist collapse toggle (helpful on mobile screens)
    const toggleChecklistBtn = this.root.querySelector(
      '#nl-toggle-checklist-btn'
    ) as HTMLButtonElement;
    toggleChecklistBtn.addEventListener('click', () => {
      this.checklistCardEl.classList.toggle('is-collapsed');
    });

    // Auto-collapse checklist on small mobile viewports initially so 3D view is maximally open
    if (window.innerWidth <= 768) {
      this.checklistCardEl.classList.add('is-collapsed');
    }

    // Time of Day buttons
    this.root.querySelectorAll<HTMLButtonElement>('[data-tod]').forEach((btn) => {
      const tod = btn.dataset.tod as TimeOfDay;
      this.todButtons[tod].push(btn);
      btn.addEventListener('click', () => {
        this.onSelectTimeOfDay?.(tod);
        btn.blur();
      });
    });

    // Fast Travel buttons
    this.root.querySelectorAll<HTMLButtonElement>('[data-travel]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const dest = btn.dataset.travel as 'fountain' | 'archway' | 'rooftop';
        this.onFastTravel?.(dest);
        btn.blur();
      });
    });

    // Cat Action buttons
    this.root.querySelectorAll<HTMLButtonElement>('[data-action]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const act = btn.dataset.action as 'meow' | 'swat' | 'loaf' | 'jump';
        this.onTriggerAction?.(act);
        btn.blur();
      });
    });

    // Game Start Modal buttons
    const startNewBtn = this.root.querySelector('#nl-start-new-btn') as HTMLButtonElement;
    startNewBtn.addEventListener('click', () => {
      this.startDialog.close();
      this.onStartNewGame?.();
    });

    this.startContinueBtn.addEventListener('click', () => {
      this.startDialog.close();
      this.onContinueGame?.();
    });

    const openStartBtn = this.root.querySelector('#nl-open-start-btn') as HTMLButtonElement;
    openStartBtn.addEventListener('click', () => {
      this.showStartModal(true);
      openStartBtn.blur();
    });

    // Mid-game Restart from Beginning button
    const resetRunBtn = this.root.querySelector('#nl-reset-run-btn') as HTMLButtonElement;
    resetRunBtn.addEventListener('click', () => {
      this.onResetRun?.();
      resetRunBtn.blur();
    });

    // Open Victory / SNS Share Modal button
    this.openVictoryBtn.addEventListener('click', () => {
      this.showVictoryModal(this.lastClearSeconds);
      this.openVictoryBtn.blur();
    });

    // Coat Dialog Open & Mandatory Light-Dismiss Fallback
    const openCoatBtn = this.root.querySelector('#nl-open-coat-btn') as HTMLButtonElement;
    openCoatBtn.addEventListener('click', () => {
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

    let activePointerId: number | null = null;
    const maxRadius = 42;

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
      activePointerId = null;
      knob.style.transform = 'translate(0px, 0px)';
      base.classList.remove('is-active');
      this.onJoystickMove?.(0, 0, false);
    };

    zone.addEventListener('pointerdown', (e: PointerEvent) => {
      e.stopPropagation();
      activePointerId = e.pointerId;
      zone.setPointerCapture(e.pointerId);
      base.classList.add('is-active');
      updateStick(e.clientX, e.clientY);
    });

    zone.addEventListener('pointermove', (e: PointerEvent) => {
      if (e.pointerId !== activePointerId) return;
      e.stopPropagation();
      updateStick(e.clientX, e.clientY);
    });

    zone.addEventListener('pointerup', (e: PointerEvent) => {
      if (e.pointerId !== activePointerId) return;
      resetStick();
    });

    zone.addEventListener('pointercancel', (e: PointerEvent) => {
      if (e.pointerId !== activePointerId) return;
      resetStick();
    });
  }

  private buildShareMessage(): string {
    const laoTime = formatLaoMinutesSeconds(this.lastClearSeconds);
    const digital = formatDigitalTime(this.lastClearSeconds);
    return `🐾 ຂ້ອຍຫຼິ້ນເກມ "ແມວລາວ NekoLao (Issarapon School)" ຢູ່ສວນປະຕູໄຊ ວຽງຈັນ ເກັບດອກຈຳປາ ${this.lastFlowers}/${this.lastTotalFlowers} ດອກ ແລະ ພາລະກິດ ${this.lastDoneTasks}/6 ດ້ວຍເວລາ ${laoTime} (${digital})! 🌼✨ #IssaraponSchool #NekoLao #PatuxayPark #Laos`;
  }

  public showStartModal(hasSavedProgress: boolean): void {
    this.startContinueBtn.classList.toggle('is-hidden', !hasSavedProgress);
    if (!this.startDialog.open) {
      this.startDialog.showModal();
    }
  }

  public showVictoryModal(clearSeconds: number, isFullClear = true): void {
    this.lastClearSeconds = clearSeconds;
    this.victoryTimeMainEl.textContent = formatLaoMinutesSeconds(clearSeconds);
    this.victoryTimeSubEl.textContent = `(${formatDigitalTime(clearSeconds)})`;
    this.victoryStatFlowersEl.textContent = `🌼 ດອກຈຳປາ ${this.lastFlowers} / ${this.lastTotalFlowers}`;
    this.victoryStatTasksEl.textContent = `✅ ພາລະກິດ ${this.lastDoneTasks} / 6`;

    if (isFullClear || (this.lastFlowers >= this.lastTotalFlowers && this.lastDoneTasks >= 6)) {
      this.victoryBadgeEl.textContent = '🏆 ພາລະກິດສຳເລັດຄົບທຸກຂໍ້! 🏆';
      this.victoryTitleEl.textContent = 'ຊົມເຊີຍ! ສຳຫຼວດສວນປະຕູໄຊສຳເລັດແລ້ວ!';
    } else if (this.lastFlowers >= this.lastTotalFlowers) {
      this.victoryBadgeEl.textContent = '🌼 ເກັບດອກຈຳປາຄົບ 30 ດອກແລ້ວ! 🌼';
      this.victoryTitleEl.textContent = 'ຊົມເຊີຍ! ເກັບດອກຈຳປາຄົບທຸກດອກແລ້ວ!';
    } else {
      this.victoryBadgeEl.textContent = '⏱️ ສະຖິຕິເວລາປັດຈຸບັນ & ແຊຣ໌ SNS';
      this.victoryTitleEl.textContent = 'ແມວລາວ NekoLao • Issarapon School';
    }

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
    this.muteBtn.innerHTML = muted
      ? '🔇 ປິດສຽງ <kbd>M</kbd>'
      : '🔊 ສຽງ <kbd>M</kbd>';
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
    }, 3100);
  }

  public updateState(data: HUDUpdateData): void {
    // 1. Update Flower Counter
    this.lastFlowers = data.flowers;
    this.lastTotalFlowers = data.totalFlowers;
    this.flowerCountEl.textContent = `${data.flowers} / ${data.totalFlowers}`;
    const pct = Math.min(100, Math.round((data.flowers / Math.max(1, data.totalFlowers)) * 100));
    this.flowerBarFillEl.style.width = `${pct}%`;

    // 2. Update Timer
    const displaySecs =
      data.isCleared && data.clearTimeSeconds !== null
        ? data.clearTimeSeconds
        : data.elapsedSeconds;
    this.timerValueEl.textContent = formatLaoMinutesSeconds(displaySecs);
    this.timerValueEl.classList.toggle('is-cleared', data.isCleared);
    this.openVictoryBtn.classList.toggle('is-cleared-glow', data.isCleared);
    this.lastClearSeconds = displaySecs;

    // 3. Update Elevation Badge in Lao
    if (data.elevationY >= 14.5) {
      this.elevationBadgeEl.textContent = `ດາດຟ້າປະຕູໄຊ • ${data.elevationY.toFixed(1)} ແມັດ`;
    } else if (data.elevationY >= 2.0) {
      this.elevationBadgeEl.textContent = `ປະຕູໄຊ • ${data.elevationY.toFixed(1)} ແມັດ`;
    } else {
      this.elevationBadgeEl.textContent = `ເດີ່ນສວນ • ${data.elevationY.toFixed(1)} ແມັດ`;
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
    this.checklistProgressEl.textContent = `${doneCount}/6 ▾`;

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
        ? `☀️ ກຳລັງນອນໝອບຄາງຮືໆຢູ່ ${data.activeNapSpot} — ກົດ [Q] ຫຼື ຍ່າງເພື່ອຕື່ນ`
        : `☀️ ບ່ອນນອນອາບແດດ: ${data.activeNapSpot} — ກົດ [Q] ເພື່ອນອນໝອບ`;
    } else if (!bannerMessage && data.isLoafing) {
      bannerMessage = '🐾 ແມວກຳລັງນອນໝອບພັກຜ່ອນ — ກົດ [Q] ຫຼື ຍ່າງເພື່ອລຸກຂຶ້ນ';
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
        justify-content: space-between;
        padding: 16px 20px;
        z-index: 20;
        transition: opacity 0.25s ease;
        font-family: 'Noto Sans Lao', 'Plus Jakarta Sans', sans-serif;
      }
      .nl-hud-wrapper.is-hidden,
      .nl-photo-overlay.is-hidden,
      .nl-prompt-banner.is-hidden,
      .is-hidden {
        display: none !important;
      }

      .nl-left-column,
      .nl-right-column {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 345px;
      }
      .nl-right-column {
        align-items: flex-end;
        max-width: 470px;
      }

      .nl-glass-card {
        pointer-events: auto;
        background: rgba(24, 18, 14, 0.76);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1px solid rgba(255, 209, 102, 0.36);
        border-radius: 16px;
        padding: 12px 15px;
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.38);
        color: #fff9f0;
      }

      .nl-brand-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 8px;
      }
      .nl-title {
        font-family: 'Noto Sans Lao', 'Fredoka', sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        color: #ffd166;
        line-height: 1.2;
      }
      .nl-subtitle {
        font-size: 0.75rem;
        color: #e2d4c0;
        margin-top: 2px;
      }
      .nl-elevation-badge {
        font-size: 0.72rem;
        font-weight: 600;
        padding: 4px 9px;
        border-radius: 999px;
        background: rgba(46, 196, 182, 0.22);
        border: 1px solid rgba(46, 196, 182, 0.55);
        color: #9bf6ee;
        white-space: nowrap;
      }

      .nl-timer-row {
        display: flex;
        align-items: center;
        gap: 6px;
        background: rgba(255, 209, 102, 0.11);
        border: 1px solid rgba(255, 209, 102, 0.28);
        border-radius: 10px;
        padding: 5px 9px;
        margin-bottom: 9px;
        font-size: 0.78rem;
      }
      .nl-timer-label {
        color: #e2d4c0;
        font-weight: 600;
      }
      .nl-timer-value {
        flex: 1;
        color: #fff9f0;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .nl-timer-value.is-cleared {
        color: #2ec4b6;
      }
      .nl-mini-icon-btn {
        cursor: pointer;
        border: 1px solid rgba(255, 209, 102, 0.4);
        background: rgba(255, 248, 235, 0.12);
        color: #ffd166;
        border-radius: 6px;
        padding: 2px 7px;
        font-family: inherit;
        font-size: 0.7rem;
        font-weight: 600;
      }
      .nl-mini-icon-btn:hover {
        background: rgba(255, 209, 102, 0.28);
      }

      .nl-flower-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.84rem;
        margin-bottom: 6px;
      }
      .nl-flower-label {
        flex: 1;
        margin-left: 6px;
        color: #fff3df;
        font-weight: 600;
      }
      .nl-flower-count {
        color: #ffd166;
        font-family: 'Fredoka', sans-serif;
        font-size: 0.96rem;
      }
      .nl-progress-track {
        width: 100%;
        height: 7px;
        background: rgba(255, 255, 255, 0.12);
        border-radius: 999px;
        overflow: hidden;
      }
      .nl-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #ff9f1c, #ffd166, #2ec4b6);
        border-radius: 999px;
        transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .nl-game-control-row {
        display: flex;
        gap: 6px;
        margin-top: 10px;
      }
      .nl-restart-btn,
      .nl-share-hud-btn {
        cursor: pointer;
        flex: 1;
        border-radius: 10px;
        padding: 6px 8px;
        font-family: inherit;
        font-size: 0.74rem;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        transition: all 0.16s ease;
      }
      .nl-restart-btn {
        background: rgba(255, 159, 28, 0.18);
        border: 1px solid rgba(255, 209, 102, 0.55);
        color: #ffd166;
      }
      .nl-restart-btn:hover {
        background: rgba(255, 209, 102, 0.32);
        transform: translateY(-1px);
      }
      .nl-share-hud-btn {
        background: rgba(46, 196, 182, 0.2);
        border: 1px solid rgba(46, 196, 182, 0.6);
        color: #9bf6ee;
      }
      .nl-share-hud-btn:hover {
        background: rgba(46, 196, 182, 0.35);
        transform: translateY(-1px);
      }
      .nl-share-hud-btn.is-cleared-glow {
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1c130c;
        border-color: #ffd166;
        box-shadow: 0 0 14px rgba(255, 209, 102, 0.55);
      }

      .nl-card-heading-btn {
        width: 100%;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: inherit;
        font-size: 0.8rem;
        color: #ffd166;
        font-weight: 700;
        cursor: pointer;
        padding: 0;
        margin-bottom: 8px;
      }
      .nl-checklist-card.is-collapsed .nl-card-heading-btn {
        margin-bottom: 0;
      }
      .nl-checklist-card.is-collapsed .nl-checklist-list {
        display: none;
      }
      .nl-checklist-progress {
        font-size: 0.74rem;
        color: #9bf6ee;
      }
      .nl-checklist-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .nl-check-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.78rem;
        color: #e7dac8;
        transition: color 0.2s ease;
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

      .nl-toolbar-card,
      .nl-travel-card {
        display: flex;
        align-items: center;
        gap: 7px;
        flex-wrap: wrap;
        padding: 9px 12px;
      }
      .nl-toolbar-group {
        display: flex;
        align-items: center;
        gap: 5px;
        flex-wrap: wrap;
      }
      .nl-group-label {
        font-size: 0.74rem;
        color: #d8c7b0;
        margin-right: 2px;
        font-weight: 700;
      }
      .nl-toolbar-divider {
        width: 1px;
        height: 20px;
        background: rgba(255, 209, 102, 0.25);
        margin: 0 2px;
      }

      .nl-pill-btn,
      .nl-action-chip,
      .nl-mini-btn,
      .nl-cat-btn {
        cursor: pointer;
        border: 1px solid rgba(255, 209, 102, 0.32);
        background: rgba(255, 248, 235, 0.09);
        color: #fff9f0;
        font-family: inherit;
        font-size: 0.76rem;
        font-weight: 600;
        padding: 6px 10px;
        border-radius: 999px;
        transition: all 0.16s ease;
        display: inline-flex;
        align-items: center;
        gap: 5px;
      }
      .nl-pill-btn:hover,
      .nl-action-chip:hover,
      .nl-mini-btn:hover,
      .nl-cat-btn:hover {
        background: rgba(255, 209, 102, 0.24);
        border-color: #ffd166;
        transform: translateY(-1px);
      }
      .nl-pill-btn.is-active {
        background: #ffd166;
        color: #1d150e;
        border-color: #ffd166;
        font-weight: 700;
      }

      kbd {
        font-family: inherit;
        font-size: 0.65rem;
        padding: 1px 5px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.38);
        border: 1px solid rgba(255, 255, 255, 0.22);
        color: #ffd166;
      }

      /* Virtual Joystick for Mobile / Touch */
      .nl-joystick-zone {
        position: fixed;
        bottom: 22px;
        left: 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        pointer-events: auto;
        touch-action: none;
        z-index: 25;
      }
      .nl-joystick-base {
        width: 108px;
        height: 108px;
        border-radius: 50%;
        background: rgba(24, 18, 14, 0.62);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 209, 102, 0.45);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        transition: border-color 0.2s ease, background 0.2s ease;
      }
      .nl-joystick-base.is-active {
        border-color: #ffd166;
        background: rgba(38, 28, 20, 0.78);
      }
      .nl-joystick-knob {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1d150e;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.45);
        pointer-events: none;
      }
      .nl-joystick-hint {
        font-size: 0.68rem;
        color: rgba(255, 249, 240, 0.78);
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }

      .nl-bottom-dock {
        position: fixed;
        bottom: 18px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        z-index: 22;
      }
      .nl-prompt-banner {
        pointer-events: auto;
        background: linear-gradient(90deg, rgba(158, 27, 36, 0.92), rgba(34, 24, 18, 0.92));
        border: 1.5px solid #ffd166;
        color: #fff9f0;
        padding: 8px 18px;
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 600;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
        text-align: center;
      }
      .nl-controls-bar {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 14px;
        border-radius: 999px;
      }
      .nl-move-hint {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 0.75rem;
        color: #e2d4c0;
        white-space: nowrap;
      }
      .nl-cat-actions {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
        justify-content: center;
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
        padding: 24px;
      }
      .nl-viewfinder-grid {
        position: relative;
        flex: 1;
        border: 1px solid rgba(255, 249, 240, 0.28);
        border-radius: 12px;
        margin-bottom: 16px;
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
        bottom: 14px;
        right: 18px;
        font-family: 'Noto Sans Lao', 'Fredoka', sans-serif;
        font-size: 0.85rem;
        letter-spacing: 0.06em;
        color: rgba(255, 209, 102, 0.92);
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.65);
      }
      .nl-photo-controls {
        align-self: center;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        border-radius: 24px;
        padding: 10px 18px;
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
        top: 18px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        z-index: 45;
        pointer-events: none;
        width: max-content;
        max-width: 92vw;
      }
      .nl-toast {
        background: rgba(24, 18, 14, 0.92);
        backdrop-filter: blur(10px);
        border: 1.5px solid #ffd166;
        color: #fff9f0;
        padding: 9px 18px;
        border-radius: 999px;
        font-size: 0.84rem;
        font-weight: 600;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
        animation: nlToastIn 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        text-align: center;
      }
      .nl-toast.is-leaving {
        opacity: 0;
        transform: translateY(-8px);
        transition: all 0.28s ease;
      }
      @keyframes nlToastIn {
        from { opacity: 0; transform: translateY(-12px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* Dialogs: Start Modal, Coat Wardrobe & Victory Modal */
      .nl-start-dialog,
      .nl-coat-dialog,
      .nl-victory-dialog {
        margin: auto;
        border: 2px solid rgba(255, 209, 102, 0.72);
        border-radius: 22px;
        background: rgba(24, 18, 14, 0.95);
        backdrop-filter: blur(18px);
        color: #fff9f0;
        padding: 0;
        max-width: 540px;
        width: calc(100vw - 28px);
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
        font-family: 'Noto Sans Lao', 'Plus Jakarta Sans', sans-serif;
      }
      .nl-start-dialog::backdrop,
      .nl-coat-dialog::backdrop,
      .nl-victory-dialog::backdrop {
        background-color: rgba(10, 7, 5, 0.65);
        backdrop-filter: blur(5px);
      }
      .nl-dialog-form {
        padding: 22px 24px;
      }
      .nl-school-banner {
        display: inline-block;
        padding: 5px 15px;
        border-radius: 999px;
        background: linear-gradient(90deg, rgba(90, 22, 32, 0.9), rgba(56, 11, 18, 0.9));
        border: 1.5px solid #ffd166;
        color: #ffd166;
        font-weight: 800;
        font-size: 0.85rem;
        margin-bottom: 10px;
        letter-spacing: 0.03em;
      }
      .nl-start-title {
        font-size: 1.65rem;
        font-weight: 800;
        color: #ffd166;
        margin-bottom: 6px;
      }
      .nl-start-rules-box {
        text-align: left;
        background: rgba(255, 248, 235, 0.06);
        border: 1px solid rgba(255, 209, 102, 0.32);
        border-radius: 16px;
        padding: 14px 16px;
        margin-bottom: 18px;
        display: flex;
        flex-direction: column;
        gap: 9px;
      }
      .nl-rule-item {
        display: flex;
        align-items: center;
        gap: 9px;
        font-size: 0.84rem;
        color: #f3e8d8;
      }
      .nl-rule-item strong {
        color: #ffd166;
      }
      .nl-start-actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .nl-big-start-btn {
        cursor: pointer;
        width: 100%;
        padding: 14px 20px;
        border-radius: 16px;
        border: none;
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1c130c;
        font-family: inherit;
        font-size: 1.08rem;
        font-weight: 800;
        box-shadow: 0 8px 24px rgba(255, 159, 28, 0.42);
        transition: transform 0.16s ease, box-shadow 0.16s ease;
      }
      .nl-big-start-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(255, 209, 102, 0.58);
      }
      .nl-continue-btn {
        cursor: pointer;
        width: 100%;
        padding: 10px 16px;
        border-radius: 14px;
        border: 1px solid rgba(46, 196, 182, 0.65);
        background: rgba(46, 196, 182, 0.18);
        color: #9bf6ee;
        font-family: inherit;
        font-size: 0.88rem;
        font-weight: 700;
        transition: background 0.16s ease;
      }
      .nl-continue-btn:hover {
        background: rgba(46, 196, 182, 0.32);
      }

      .nl-dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 16px;
      }
      .nl-dialog-title {
        font-size: 1.25rem;
        color: #ffd166;
      }
      .nl-dialog-subtitle {
        font-size: 0.82rem;
        color: #d8c7b0;
        margin-top: 3px;
      }
      .nl-dialog-close {
        cursor: pointer;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.22);
        background: rgba(255, 255, 255, 0.08);
        color: #fff9f0;
        font-size: 0.9rem;
      }
      .nl-coat-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        margin-bottom: 18px;
      }
      .nl-coat-option {
        cursor: pointer;
        text-align: left;
        padding: 13px;
        border-radius: 14px;
        border: 1.5px solid rgba(255, 209, 102, 0.25);
        background: rgba(255, 248, 235, 0.05);
        color: #fff9f0;
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-family: inherit;
        transition: all 0.16s ease;
      }
      .nl-coat-option:hover {
        border-color: rgba(255, 209, 102, 0.65);
        background: rgba(255, 209, 102, 0.12);
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
        font-size: 0.86rem;
        color: #ffd166;
      }
      .nl-coat-desc {
        font-size: 0.74rem;
        color: #d9cbb8;
        line-height: 1.35;
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
        font-size: 0.8rem;
        margin-bottom: 8px;
      }
      .nl-victory-title {
        font-size: 1.34rem;
        color: #fff9f0;
        margin-bottom: 6px;
      }
      .nl-victory-subtitle {
        font-size: 0.84rem;
        color: #dfd0bc;
        margin-bottom: 16px;
      }
      .nl-victory-time-box {
        background: linear-gradient(135deg, rgba(255, 209, 102, 0.16), rgba(46, 196, 182, 0.14));
        border: 2px solid #ffd166;
        border-radius: 18px;
        padding: 16px 18px;
        margin-bottom: 18px;
      }
      .nl-victory-time-label {
        font-size: 0.8rem;
        color: #ffd166;
        font-weight: 600;
      }
      .nl-victory-time-main {
        font-size: 2.05rem;
        font-weight: 800;
        color: #fff9f0;
        margin: 6px 0 2px;
        text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
      }
      .nl-victory-time-sub {
        font-family: 'Fredoka', monospace;
        font-size: 0.95rem;
        color: #9bf6ee;
        margin-bottom: 10px;
      }
      .nl-victory-stats-row {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .nl-stat-pill {
        padding: 4px 12px;
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-size: 0.78rem;
        font-weight: 600;
      }
      .nl-share-section {
        margin-bottom: 18px;
      }
      .nl-share-heading {
        font-size: 0.82rem;
        color: #ffd166;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .nl-share-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
      }
      .nl-share-btn {
        cursor: pointer;
        border: 1px solid rgba(255, 209, 102, 0.45);
        border-radius: 12px;
        padding: 9px 13px;
        font-family: inherit;
        font-size: 0.8rem;
        font-weight: 700;
        color: #fff9f0;
        background: rgba(255, 255, 255, 0.1);
        transition: transform 0.15s ease, background 0.15s ease;
      }
      .nl-share-btn:hover {
        transform: translateY(-2px);
        background: rgba(255, 209, 102, 0.25);
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
        gap: 14px;
      }

      /* Mobile Responsive Adjustments */
      @media (max-width: 820px) {
        .nl-hud-wrapper {
          padding: 10px 10px;
        }
        .nl-left-column {
          max-width: 225px;
          gap: 6px;
        }
        .nl-right-column {
          max-width: 210px;
          gap: 6px;
        }
        .nl-glass-card {
          padding: 8px 10px;
          border-radius: 13px;
        }
        .nl-title {
          font-size: 0.96rem;
        }
        .nl-subtitle {
          font-size: 0.66rem;
        }
        .nl-move-hint,
        .nl-desktop-only,
        kbd {
          display: none !important;
        }
        .nl-elevation-badge {
          font-size: 0.64rem;
          padding: 2px 6px;
        }
        .nl-timer-row {
          padding: 4px 7px;
          font-size: 0.7rem;
          margin-bottom: 6px;
        }
        .nl-flower-row {
          font-size: 0.75rem;
        }
        .nl-restart-btn,
        .nl-share-hud-btn {
          font-size: 0.66rem;
          padding: 5px 6px;
        }
        .nl-pill-btn,
        .nl-action-chip,
        .nl-mini-btn {
          font-size: 0.68rem;
          padding: 5px 8px;
        }
        .nl-joystick-zone {
          bottom: 14px;
          left: 14px;
        }
        .nl-joystick-base {
          width: 94px;
          height: 94px;
        }
        .nl-joystick-knob {
          width: 40px;
          height: 40px;
          font-size: 1rem;
        }
        .nl-bottom-dock {
          left: auto;
          right: 12px;
          bottom: 14px;
          transform: none;
          align-items: flex-end;
          max-width: calc(100vw - 135px);
        }
        .nl-controls-bar {
          padding: 6px 8px;
          border-radius: 18px;
        }
        .nl-cat-btn {
          font-size: 0.74rem;
          padding: 8px 11px;
        }
        .nl-coat-grid {
          grid-template-columns: 1fr;
        }
        .nl-victory-time-main {
          font-size: 1.55rem;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

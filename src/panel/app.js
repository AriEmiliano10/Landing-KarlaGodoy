import { renderPanel } from './dashboard.js';

const root = document.querySelector('#panel-root');
const state = {
  activeView: 'inicio',
  isMenuOpen: false,
  isNotificationsOpen: false,
  agendaFilter: 'todas',
  patientQuery: '',
  weekIndex: 0,
  availability: {
    Domingo: { enabled: false, slots: [] },
    Lunes: { enabled: true, slots: [{ start: '09:00', end: '18:00' }] },
    Martes: { enabled: true, slots: [{ start: '09:00', end: '18:00' }] },
    Miércoles: { enabled: true, slots: [{ start: '09:00', end: '18:00' }] },
    Jueves: { enabled: true, slots: [{ start: '09:00', end: '18:00' }] },
    Viernes: { enabled: true, slots: [{ start: '09:00', end: '15:00' }] },
    Sábado: { enabled: false, slots: [] },
  },
  settings: { reminders: true, weeklySummary: false, contentReview: true },
  toast: '',
};

const showToast = (message) => {
  state.toast = message;
  draw();
  window.setTimeout(() => {
    if (state.toast === message) {
      state.toast = '';
      draw();
    }
  }, 3200);
};

function draw() {
  root.innerHTML = renderPanel(state);
  window.lucide?.createIcons();

  root.querySelectorAll('[data-panel-view]').forEach((button) => button.addEventListener('click', () => {
    state.activeView = button.dataset.panelView;
    state.isMenuOpen = false;
    draw();
  }));

  root.querySelector('[data-panel-menu]')?.addEventListener('click', () => { state.isMenuOpen = !state.isMenuOpen; draw(); });
  root.querySelector('[data-panel-notifications]')?.addEventListener('click', () => { state.isNotificationsOpen = !state.isNotificationsOpen; draw(); });
  root.querySelectorAll('[data-agenda-filter]').forEach((button) => button.addEventListener('click', () => { state.agendaFilter = button.dataset.agendaFilter; draw(); }));
  root.querySelectorAll('[data-week-step]').forEach((button) => button.addEventListener('click', () => { state.weekIndex += Number(button.dataset.weekStep); draw(); }));
  root.querySelectorAll('[data-toggle-day]').forEach((button) => button.addEventListener('click', () => {
    const day = button.dataset.toggleDay;
    const schedule = state.availability[day];
    schedule.enabled = !schedule.enabled;
    if (schedule.enabled && !schedule.slots.length) schedule.slots.push({ start: '09:00', end: '13:00' });
    draw();
  }));
  root.querySelectorAll('[data-add-slot]').forEach((button) => button.addEventListener('click', () => {
    state.availability[button.dataset.addSlot].slots.push({ start: '09:00', end: '13:00' });
    draw();
  }));
  root.querySelectorAll('[data-remove-slot]').forEach((button) => button.addEventListener('click', () => {
    const schedule = state.availability[button.dataset.removeSlot];
    schedule.slots.splice(Number(button.dataset.slotIndex), 1);
    draw();
  }));
  root.querySelectorAll('[data-slot-input]').forEach((input) => input.addEventListener('change', () => {
    const schedule = state.availability[input.dataset.slotDay];
    schedule.slots[Number(input.dataset.slotIndex)][input.dataset.slotField] = input.value;
    draw();
  }));
  root.querySelector('[data-copy-weekdays]')?.addEventListener('click', () => {
    const source = state.availability.Lunes.slots.map((slot) => ({ ...slot }));
    ['Martes', 'Miércoles', 'Jueves', 'Viernes'].forEach((day) => { state.availability[day] = { enabled: true, slots: source.map((slot) => ({ ...slot })) }; });
    showToast('Horario de lunes aplicado a días hábiles (demostración)');
  });
  root.querySelectorAll('[data-toggle-setting]').forEach((button) => button.addEventListener('click', () => { const setting = button.dataset.toggleSetting; state.settings[setting] = !state.settings[setting]; draw(); }));
  root.querySelectorAll('[data-demo-action]').forEach((button) => button.addEventListener('click', () => showToast(button.dataset.demoAction)));

  const patientSearch = root.querySelector('#panel-patient-search');
  patientSearch?.addEventListener('input', (event) => {
    state.patientQuery = event.target.value;
    draw();
    const restoredInput = root.querySelector('#panel-patient-search');
    restoredInput?.focus();
    restoredInput?.setSelectionRange(state.patientQuery.length, state.patientQuery.length);
  });
}

draw();

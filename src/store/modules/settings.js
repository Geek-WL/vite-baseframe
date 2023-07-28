import { defineStore } from 'pinia';
import defaultSettings from '@/settings';
import { useStorage } from '@vueuse/core';

export const useSettingsStore = defineStore('setting', () => {
  // state
  const tagsView = useStorage('tagsView', defaultSettings.tagsView);

  const showSettings = ref(defaultSettings.showSettings);
  const fixedHeader = ref(defaultSettings.fixedHeader);
  const sidebarLogo = ref(defaultSettings.sidebarLogo);

  const layout = useStorage('layout', defaultSettings.layout);

  // actions
  function changeSetting(param) {
    const { key, value } = param;
    switch (key) {
      case 'showSettings':
        showSettings.value = value;
        break;
      case 'fixedHeader':
        fixedHeader.value = value;
        break;
      case 'tagsView':
        tagsView.value = value;
        break;
      case 'sidevarLogo':
        sidebarLogo.value = value;
        break;
      case 'layout':
        layout.value = value;
        break;
      default:
        break;
    }
  }

  return {
    showSettings,
    tagsView,
    fixedHeader,
    sidebarLogo,
    layout,
    changeSetting,
  };
});

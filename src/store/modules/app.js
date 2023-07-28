import { defineStore } from 'pinia';
import defaultSettings from '@/settings.js';

// 导入 Element Plus 中英文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';

export const useAppStore = defineStore('app', () => {
  const device = useStorage('device', 'desktop');
  const size = useStorage('size', defaultSettings.size);
  const language = useStorage('language', defaultSettings.language);

  const sidebarStatus = useStorage('sidebarStatus', 'closed');
  const sidebar = reactive({
    opened: sidebarStatus.value !== 'closed',
    withoutAnimation: false,
  });

  /**
   * 根据语言标识读取对应的语言包
   */
  const locale = computed(() => {
    if (language?.value === 'en') {
      return en;
    } else {
      return zhCn;
    }
  });

  /**
   * 切换语言
   * @param val
   */
  function changeLanguage(val) {
    language.value = val;
  }

  return {
    device,
    size,
    sidebar,
    language,
    locale,
    changeLanguage,
  };
});

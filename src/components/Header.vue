<template>
  <div class="header">
    <nav>
      <ul>
        <li v-for="menuItem in filteredMenuItems" :key="menuItem.tittle">
          <template v-if="hasPermission(menuItem.permission)">
            <a :href="menuItem.active_link">{{ menuItem.tittle }}</a>
            <ul v-if="menuItem.menu && menuItem.menu.length">
              <li v-for="subItem in filteredSubMenuItems(menuItem.menu)" :key="subItem.menuValue">
                <a :href="subItem.route">{{ subItem.menuValue }}</a>
                <ul v-if="subItem.subMenus && subItem.subMenus.length">
                  <li v-for="subSubItem in filteredSubMenuItems(subItem.subMenus)" :key="subSubItem.menuValue">
                    <a :href="subSubItem.route">{{ subSubItem.menuValue }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { usePermissions } from '@/composables/usePermissions';
import headerMenu from '@/assets/json/header-menu.json';

export default {
  name: 'Header',
  setup() {
    const store = useStore();
    const { hasPermission } = usePermissions();

    const filteredMenuItems = computed(() => {
      return headerMenu.filter(item => hasPermission(item.permission));
    });

    const filteredSubMenuItems = (items) => {
      return items.filter(item => hasPermission(item.permission));
    };

    return {
      filteredMenuItems,
      filteredSubMenuItems,
      hasPermission
    };
  }
};
</script> 
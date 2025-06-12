<template>
    <div class="main-menu-wrapper" :class="{ active: isActive }" dir="rtl">								
        <div class="menu-header">
            <router-link to="/home/" class="menu-logo">
                <img src="@/assets/img/logo1.jpg" class="img-fluid" alt="Logo">
            </router-link>
            <a id="menu_close" class="menu-close" href="javascript:void(0);" @click="closeSidebar">
                <i class="fas fa-times"></i>
            </a>
        </div>
    
        <ul class="main-nav" :class="{ active: isActive }">
            <template v-for="item in filteredMenuItems" :key="item.tittle">
                <li class="megamenu" @mouseenter="activateMenu" :class="{ 'active': isActiveRoute(item.active_link) }" 
                    @mouseleave="deactivateMenu" v-if=" item.tittle === 'الرئيسية'">
                    <router-link :to="{ 'path': item.route }">{{ item.tittle }}</router-link>
                </li>
                <li v-else-if="item.separateRoute === false" class="has-submenu" :class="{ 'active': isActiveRoute(item.active_link) || isActiveRoute(item.active_link1) || isActiveRoute(item.active_link2) || isActiveRoute(item.active_link3)}">
                    <a href="javascript:void(0);" @click="toggleTab(item)">
                        {{ item.tittle }}
                    </a>
                    <ul class="submenu" :class="{ 'd-block': item.showAsTab }">
                        <template v-for="menuItem in filteredSubMenuItems(item.menu)" :key="menuItem.menuValue">
                            <li v-if="menuItem.hasSubRoute === false" :class="{ 'active': isActiveRoute(menuItem.active_link) }">
                                <router-link :to="{ 'path': menuItem.route }">{{ menuItem.menuValue }}</router-link>
                            </li>
                            <li v-else-if="menuItem.hasSubRoute === true" class="has-submenu" :class="{ 'active': isActiveRoute(menuItem.active_link) }">
                                <a href="javascript:void(0);" @click="toggleTab(menuItem)">{{ menuItem.menuValue }}</a>
                                <ul class="submenu" :class="{ 'd-block': menuItem.showAsTab }">
                                    <template v-for="subMenu in filteredSubMenuItems(menuItem.subMenus)" :key="subMenu.menuValue">
                                        <li v-if="subMenu.hasSubRoute === false" :class="{ 'active': isActiveRoute(subMenu.active_link) }">
                                            <router-link :to="{ 'path': subMenu.route }">{{ subMenu.menuValue }}</router-link>
                                        </li>
                                        <li class="has-submenu" v-if="subMenu.hasSubRoute === true" :class="{ 'active': isActiveRoute(subMenu.active_link) }">
                                            <a href="javascript:void(0);" @click="toggleTab(subMenu)">{{ subMenu.menuValue }}</a>
                                            <ul class="submenu" :class="{ 'd-block': subMenu.showAsTab }">
                                                <li v-for="subMenuItems in filteredSubMenuItems(subMenu.subMenusTwo)" :key="subMenuItems.menuValue" :class="{ 'active': isActiveRoute(subMenuItems.active_link) }">
                                                    <router-link :to="{ 'path': subMenuItems.route }">{{ subMenuItems.menuValue }}</router-link>
                                                </li>
                                            </ul>
                                        </li>
                                    </template>                                
                                </ul>
                            </li>
                        </template>
                    </ul>
                </li>
            </template>
        </ul>
        
        <div class="menu-dropdown">
            <!-- <div class="cart-item">
                <h6>Cart & Wishlist</h6>                                
                <div class="icon-btn">
                    <router-link to="/courses/cart" class="position-relative">
                        <i class="isax isax-shopping-cart5"></i>
                        <span class="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
                    </router-link>
                </div>
            </div> -->
            <!-- <div class="dropdown flag-dropdown mb-2">
                <a href="javascript:void(0);" class="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="@/assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                </a>
                <ul class="dropdown-menu p-2 mt-2">
                    <li>
                        <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                            <img src="@/assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                            <img src="@/assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                            <img src="@/assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE
                        </a>
                    </li>
                </ul>
            </div>
            <div class="dropdown mb-2">
                <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    USD
                </a>
                <ul class="dropdown-menu p-2 mt-2">
                    <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
                    <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
                    <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
                </ul>
            </div> -->
            <div class="dropdown mb-2">
                <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    فاتح
                </a>
                <ul class="dropdown-menu p-2 mt-2">
                    <li><a class="dropdown-item rounded" href="javascript:void(0);">فاتح</a></li>
                    <li><a class="dropdown-item rounded" href="javascript:void(0);">داكن</a></li>
                </ul>
            </div>
        </div>
        <div class="menu-login">
            <router-link to="/" class="btn btn-primary w-100 mb-2"><i class="isax isax-user me-2"></i>تسجيل الدخول</router-link>
            <router-link to="/register" class="btn btn-secondary w-100"><i class="isax isax-user-edit me-2"></i>تسجيل</router-link>
        </div>
    </div>
    </template>
    
    <script>
    import { ref, computed } from "vue";
    import { useRoute } from "vue-router";
    import { useStore } from 'vuex';
    import { usePermissions } from '@/composables/usePermissions';
    import HeaderData from '@/assets/json/header-menu.json'
    
    export default {
        data() {
            return {
                HeaderData: HeaderData,
                route_array: [],
                openDropdownIndex: null,
                isDropdownOpen: false,
                isDropdownOpen1: null,
                isSidebarOpen: false,
            }
        },
        methods: {
            openSubMenu() {
                this.isDropdownOpen = !this.isDropdownOpen;
                this.openDropdownIndex = null;
            },
            openSubMenu1(index) {
                this.isDropdownOpen1 = this.isDropdownOpen1 === index ? null : index;
            },
            toggleSubMenu(index) {
                this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
                this.isDropdownOpen = false;
            },
            closeSidebar() {
                this.isSidebarOpen = false;
                document.documentElement.classList.remove("menu-opened");
            },
            toggleTab(item) {
                item.showAsTab = !item.showAsTab;
            }
        },
        setup() {
            const route = useRoute();
            const store = useStore();
            const { hasPermission } = usePermissions();
            const isActive = ref(false);
        
            const activateMenu = () => {
                isActive.value = true;
            };
        
            const deactivateMenu = () => {
                isActive.value = false;
            };
        
            // Function to check if current route matches the active link
            const isActiveRoute = (activeLink) => {
                return route.path.includes(activeLink);
            };

            // Filter menu items based on permissions
            const filteredMenuItems = computed(() => {
                return HeaderData.filter(item => hasPermission(item.permission));
            });

            // Filter submenu items based on permissions
            const filteredSubMenuItems = (items) => {
                return items.filter(item => hasPermission(item.permission));
            };
        
            return {
                isActive,
                activateMenu,
                deactivateMenu,
                route,
                isActiveRoute,
                filteredMenuItems,
                filteredSubMenuItems,
                hasPermission
            };
        },
    }
    </script>
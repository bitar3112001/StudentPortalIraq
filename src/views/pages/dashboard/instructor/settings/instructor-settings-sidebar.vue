<template>
  <div>
    <ul
      class="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded"
    >
      <li>
        <router-link to="/instructor/instructor-settings" class="">Profile</router-link>
      </li>
      <li>
        <router-link to="/instructor/instructor-change-password">Security</router-link>
      </li>
      <li><router-link to="/instructor/instructor-plans">Plans</router-link></li>
      <li>
        <router-link to="/instructor/instructor-social-profiles"
          >Social Profiles</router-link
        >
      </li>
      <li>
        <router-link to="/instructor/instructor-linked-accounts"
          >Linked Accounts</router-link
        >
      </li>
      <li>
        <router-link to="/instructor/instructor-notifications">Notifications</router-link>
      </li>
      <li>
        <router-link to="/instructor/instructor-integrations">Integrations</router-link>
      </li>
      <li><router-link to="/instructor/instructor-withdraw">Withdraw</router-link></li>
    </ul>
  </div>
</template>

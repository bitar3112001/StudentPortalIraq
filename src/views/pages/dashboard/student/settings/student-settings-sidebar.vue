<template>
  <ul
    class="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded"
  >
    <li><router-link to="/students/student-settings">Edit Profile</router-link></li>
    <li><router-link to="/students/student-change-password">Security</router-link></li>
    <li>
      <router-link to="/students/student-social-profile">Social Profiles</router-link>
    </li>
    <li>
      <router-link to="/students/student-linked-accounts">Linked Accounts</router-link>
    </li>
    <li><router-link to="/students/student-notifications">Notifications</router-link></li>
    <li>
      <router-link to="/students/student-billing-address">Billing Address</router-link>
    </li>
  </ul>
</template>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
     

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>
    <q-footer >
      <q-tabs>
        <q-route-tab 
        to="/" 
        icon="list" 
        label="Todo" />

        <q-route-tab 
        to="/settings" 
        icon="settings" 
        label="Settings" />
        
      </q-tabs>
      </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"

      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-grey-4"
        >
         Navigation
        </q-item-label>

        <q-item
        to="/"
        class="text-grey-4"
        exact
        clickable>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
           <q-item-section>
             <q-item-label>Todo</q-item-label>
             </q-item-section>
        </q-item>
          <q-item
        to="/settings"
        class="text-grey-4"
        exact
        clickable>
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
           <q-item-section>
             <q-item-label>Settings</q-item-label>
             </q-item-section>
        </q-item>
        
       

        <!-- <EssentialLink
        
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        /> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

// const linksData = [
//   {
//     title: 'Todo',
    
//     icon: 'list',
    
//   },
//    {
//     title: 'Settings',
    
//     icon: 'settings',
    
//   },
  
// ];

export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      // essentialLinks: linksData
      // navs: [
      //   {
      //     label: "Todo",
      //     icon: "list",
      //     to: "/"
      //   },
      //   {
      //     label: "Settings",
      //     icon: "settings",
      //     to: "/settings"
      //   }
      // ]
    }
  }
}
</script>
<style lang="stylus">
 @media screen and (min-width: 768px){
   .q-footer{
     display:none;
   }
 }
</style>
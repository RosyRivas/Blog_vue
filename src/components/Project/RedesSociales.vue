<template>
  <div class="redes-sociales">
    <v-card class="social-card" @click="abrirLinkedin">
      <v-card-text class="text-center">LinkedIn</v-card-text>
      <IconLinkeding class="text-center"></IconLinkeding>
    </v-card>

    <v-card class="social-card" @click="abrirGithub">
      <v-card-text class="text-center">GitHub</v-card-text>
      <IconGithub  class="text-center"></IconGithub>
    </v-card>

    <v-card class="social-card" @click="abrirGitlab">
      <v-card-text class="text-center">GitLab</v-card-text>
      <IconGitlab class="text-center"></IconGitlab>
    </v-card>

    <v-card class="social-card" @click="abrirLinktree">
      <v-card-text class="text-center">linktr</v-card-text>
      <IconLinktree class="text-center"></IconLinktree>
    </v-card>
  </div>
</template>

<script>

import IconLinkeding from '@/components/Icons/IconLinkeding.vue';
import IconGitlab from '@/components/Icons/IconGitlab.vue';
import IconGithub from '@/components/Icons/IconGithub.vue';
//import IconEmail from '@/components/Icons/IconEmail.vue';
import IconLinktree from '@/components/Icons/IconLinktree.vue';

export default {
  components: {
    IconLinkeding,
    IconGitlab,
    IconGithub, 
   // IconEmail,
    IconLinktree,
  },
  methods: {
    abrirLinkedin() {
      window.open('https://www.linkedin.com/in/rosa-rivas-rodriguez/', '_blank');
    },
    abrirGithub() {
      window.open('https://github.com/RosyRivas', '_blank');
    },
    abrirGitlab() {
      window.open('https://gitlab.com/RosyRivas', '_blank');
    },
    abrirLinktree() {
      window.open('https://linktr.ee/RossyRivas', '_blank');
    },
    enviarCorreo() {
      window.location.to = 'rossyrivas4018@gmail.com';
    }
  }
};
</script>

<style scoped>
.redes-sociales {
  display: flex;
  justify-content: space-around;
  
}

.social-card {
  font-size: 1.25rem;
   margin: 0; 
  width: 200px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>

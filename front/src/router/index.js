import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/MyHome.vue";
import ListeBetaReader from "@/views/ListeBetaReader.vue";
import ListeBook from "@/views/ListeBook.vue";
import LoginUser from "@/views/LoginUser.vue";
import RegisterBetaReader from "@/views/RegisterBetaReader.vue";
import StartRegister from "@/components/StartRegister.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Bienvenue sur Encre-nous !'
    }
  },
  {
    path: "/beta-readers",
    name: "ListeBetaReader",
    component: ListeBetaReader,
    meta: {
      title: 'Rechercher vos bêta-lecteurs'
    }
  },  
  {
    path: "/livres",
    name: "ListeBook",
    component: ListeBook,
    meta: {
      title: 'Rechercher vos projets'
    }
  },
  {
    path: "/connexion",
    name: "LoginUser",
    component: LoginUser,
    meta: {
      title: 'Conncetez-vous sur Encre-nous !'
    }
  },
  {
    path: "/enregistrer",
    name: "StartRegister",
    component: StartRegister,
    meta: {
      title: 'Enregistrer-vous sur Encre-nous !'
    }
  },
  {
    path: "/enregistrer/beta-lecteur",
    name: "RegisterBetaReader",
    component: RegisterBetaReader,
    meta: {
      title: 'Enregistrer-vous en tant que Bêta-lecteur!'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
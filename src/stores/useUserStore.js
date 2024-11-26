import { defineStore } from "pinia";
import { ref } from "vue";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const useUserStore = defineStore("user", () => {
  // Состояние пользователя
  const user = ref(null);
  const isAuth = ref(false);

  // Метод для авторизации через Firebase
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      isAuth.value = true;

      // Сохраняем пользователя в LocalStorage (опционально)
      localStorage.setItem("user", JSON.stringify(user.value));
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  };

  // Метод для выхода через Firebase
  const logout = async () => {
    try {
      await signOut(auth);
      user.value = null;
      isAuth.value = false;

      // Удаляем пользователя из LocalStorage (опционально)
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout failed:", error.message);
      throw error;
    }
  };

  // Инициализация пользователя из Firebase при загрузке
  const initUser = () => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      user.value = JSON.parse(storedUser);
      isAuth.value = true;
    }

    // Слушаем изменения авторизации в Firebase
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        user.value = firebaseUser;
        isAuth.value = true;
        localStorage.setItem("user", JSON.stringify(firebaseUser));
      } else {
        user.value = null;
        isAuth.value = false;
        localStorage.removeItem("user");
      }
    });
  };

  // Вызываем initUser при создании store
  initUser();

  return {
    user,
    isAuth,
    login,
    logout,
  };
});

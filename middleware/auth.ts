import { useTokenStore } from "~/stores/tokenStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useTokenStore();

  if (!token.getStatus) {
    return navigateTo("/auth/login");
  }
});

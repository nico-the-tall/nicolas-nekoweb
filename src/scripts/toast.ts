import { SHOW_TOAST } from "../constants/other";

export function showToast(id: string) {
  window.dispatchEvent(new CustomEvent(SHOW_TOAST, { detail: { id } }));
}

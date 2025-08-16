import { redirect } from "next/navigation"
export const metadata = { title: "Actualidad" }
export default function Page() {
  redirect("/noticias") // usa tu listado actual
}

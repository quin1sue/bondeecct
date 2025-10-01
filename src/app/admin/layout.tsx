import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/admin/appsidebar.admin";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 bg-gray-50 min-h-screen">
        <SidebarTrigger />
        <section className="max-w-6xl mx-auto px-6 py-8">{children}</section>
      </main>
    </SidebarProvider>
  );
}

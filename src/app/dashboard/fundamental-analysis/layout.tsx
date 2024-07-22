
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });



export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<div>
  <div className={inter.className}>{children} </div>
</div>

  );
}

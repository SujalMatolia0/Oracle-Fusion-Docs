import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

export const metadata = {
  title: {
    default: 'Oracle Fusion Documentation',
    template: '%s | Oracle Fusion Docs',
  },
  description:
    'Comprehensive documentation for Oracle Fusion Sales, Service Cloud, and Application Composer.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
        docsRepositoryBase='https://github.com/SujalMatolia0/Oracle-Fusion-Docs'
          pageMap={await getPageMap()}
          copyPageButton={false}
          navbar={
            <Navbar
              logo={
                <span style={{ fontWeight: 600, fontSize: '15px' }}>
                  Oracle Fusion Docs
                </span>
              }
            />
          }
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true,
          }}
          toc={{
            float: true,
            backToTop: true,
          }}
          footer={
            <Footer>
              © {new Date().getFullYear()} Oracle Fusion Documentation by IOTX (TkBoom)
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

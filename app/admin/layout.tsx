export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-layout">
            <style>{`
        nav, footer, .whatsapp-button, .mobile-action-tray { display: none !important; }
        .pt-20 { padding-top: 0 !important; }
      `}</style>
            {children}
        </div>
    );
}

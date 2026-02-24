import Image from 'next/image';

const avatars = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/46.jpg',
    'https://randomuser.me/api/portraits/women/12.jpg',
    'https://randomuser.me/api/portraits/men/14.jpg'
];

export default function TrustAvatars() {
    return (
        <div className="flex items-center -space-x-3">
            {avatars.map((imgSrc, i) => (
                <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#0f2044] shadow-lg overflow-hidden flex-shrink-0 relative bg-slate-800"
                >
                    <Image
                        src={imgSrc}
                        alt="Verified Customer"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#0f2044] flex items-center justify-center text-white/70 text-[10px] font-bold backdrop-blur-sm z-10">
                +4K
            </div>
        </div>
    );
}

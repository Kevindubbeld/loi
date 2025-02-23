export function SocialMedia() {
    return (
            <div className="mt-20 p-8 border rounded-lg flex items-center justify-center space-x-8 cursor-pointer" onClick={() => window.location.href='/onderconstructie'}>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/5" onClick={() => window.location.href='/onderconstructie'}>
                        <img src="https://img.pikbest.com/png-images/20240828/round-logos-of-facebook-instagram-and-tiktok-colored-popular-social-media-logos_10570194.png!bw700" alt="Promotion" className="w-1/4 rounded-lg" />
                        <div>
                            <p className="text-gray-600">Volg ons op Sociale media</p>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/5" onClick={() => window.location.href='/onderconstructie'}>
                        <img src="https://media.istockphoto.com/id/1168518509/vector/email-marketing.jpg?s=612x612&w=0&k=20&c=1b3Ek3YbdAdPmW-KjeznqphxTLB-4NT1vK6bwfRcnI4=" alt="Promotion" className="w-1/4 rounded-lg" />
                        <div>
                            <p className="text-gray-600">Nieuwsbrief aanmelding</p>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/5" onClick={() => window.location.href='/onderconstructie'}>
                        <img src="https://www.shutterstock.com/image-vector/support-icon-can-be-used-600nw-1887496465.jpg" alt="Promotion" className="w-1/4 rounded-lg" />
                        <div>
                            <p className="text-gray-600">Klantenservice contactopties</p>
                        </div>
                    </div>
                </div>            
    );
}
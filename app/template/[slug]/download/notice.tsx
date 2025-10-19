"use client"

import { useEffect, useState } from "react"

export default function Notice({data} : {
    data: Template
}) {
    const [timeLeft, setTimeLeft] = useState(10)

    useEffect(() => {
        if (timeLeft <= 0) {
            const link = document.createElement("a");
            link.href = data.downloadUrl
            link.download = data.slug + ".zip"
            link.click();
            return;
        }

        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div>
            <h1 className="text-2xl text-primary font-semibold">Thank you for downloading, Your file is being prepared.</h1>
            <p className="py-3">The download will start automatically in {timeLeft} seconds.</p>
            <span className="text-sm opacity-50">If your download doesn’t start, click the button below.</span>
            <div className="my-6">
                <button 
                    onClick={() => (window.location.href = data?.downloadUrl ?? '')}
                    disabled={timeLeft > 0}
                    className="py-2 px-3 border rounded-lg cursor-pointer disabled:text-foreground/10">Download Now</button>
            </div>
        </div>
    )
}
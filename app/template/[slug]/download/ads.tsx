"use client"

import { useEffect } from "react"

export default function DownloadAds() {
    // useEffect(() => {
    //     try {
    //     (window.adsbygoogle = window.adsbygoogle || []).push({})
    //     } catch (e) {}
    // }, [])

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9634380513791071"
            data-ad-slot="1234567890"  // ganti dengan slot kamu
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    )
}
import QRCode from 'qrcode.react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [QRValue, setQRValue] = useState("")

  return (
    <div className={styles.container}>
      <a href="/scan" style={{marginBottom: "25px", backgroundColor: "black", color: "white", padding: "5px", borderRadius: "5px"}}>Scanner</a>
      <QRCode value={QRValue} size={256} />
      <input type="text" value={QRValue} onChange={e => setQRValue(e.target.value)} placeholder="QR Code Value" />
      <a href="https://github.com/anivanchen/qr/issues"><p>Report A Bug</p></a>
    </div>
  )
}
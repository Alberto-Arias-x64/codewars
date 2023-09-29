import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js"
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyBD7m3FX9M5u7OzrPX3dvtK1Byrk8Eu88c",
    authDomain: "finandina-sitiopublico.firebaseapp.com",
    databaseURL: "https://finandina-sitiopublico-default-rtdb.firebaseio.com",
    projectId: "finandina-sitiopublico",
    storageBucket: "finandina-sitiopublico.appspot.com",
    messagingSenderId: "158979438113",
    appId: "1:158979438113:web:a6308b9f5d05dcc6751560",
    measurementId: "G-5JZ6RZW76N"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const banc = {
    "AV Villas":{
        "manejo_cuenta": "$9.580 M.V.",
        "manejo_tarjeta": "$16.490 M.A.",
        "retiros_internos": "$2.450",
        "retiros_externos": "$6.485",
        "trasferencias": "$0",
        "total": "$35.005"
    },
    "Banagrario":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "$12.900 M.A.",
        "retiros_internos": "$2.100",
        "retiros_externos": "$5.760",
        "trasferencias": "$0",
        "total": "$20.760"
    },
    "Bancamía S.A.":{
        "manejo_cuenta": "$0",
        "manejo_tarjeta": "$7.420 M.A.",
        "retiros_internos": "**",
        "retiros_externos": "$6.185",
        "trasferencias": "$0",
        "total": "$13.605"
    },
    "Bancien":{
        "manejo_cuenta": "$0",
        "manejo_tarjeta": "$10.000 M.A.",
        "retiros_internos": "**",
        "retiros_externos": "$5.000",
        "trasferencias": "$0",
        "total": "$15.000"
    },
    "Banco Caja Social S.A.":{
        "manejo_cuenta": "$0",
        "manejo_tarjeta": "$0",
        "retiros_internos": "$0",
        "retiros_externos": "$6.400",
        "trasferencias": "$0",
        "total": "$6.400"
    },
    "Banco Davivienda":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "$12.990 M.A.",
        "retiros_internos": "$2.975",
        "retiros_externos": "$6.180",
        "trasferencias": "$5.355",
        "total": "$27.500"
    },
    "Banco de Bogotá":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "$14.900 M.A.",
        "retiros_internos": "$2.400",
        "retiros_externos": "$6.450",
        "trasferencias": "$2.400",
        "total": "$26.150"
    },
    "Banco de Occidente":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "$14.400 M.A.",
        "retiros_internos": "$2.300",
        "retiros_externos": "$6.100",
        "trasferencias": "$2.300",
        "total": "$25.100"
    },
    "Banco Falabella S.A.":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "$0",
        "retiros_internos": "$0",
        "retiros_externos": "$4.900",
        "trasferencias": "$0",
        "total": "$4.900"
    },
    "Banco GNB Sudameris":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "$0",
        "retiros_internos": "**",
        "retiros_externos": "$5.150",
        "trasferencias": "$0",
        "total": "$5.150"
    },
    "Banco J.P. Morgan Colombia S.A.*":{
        "manejo_cuenta": "$14.000 M.A.",
        "manejo_tarjeta": "**",
        "retiros_internos": "**",
        "retiros_externos": "**",
        "trasferencias": "$2.500",
        "total": "$16.500"
    },
    "Banco Mundo Mujer S.A.":{
        "manejo_cuenta": "$0",
        "manejo_tarjeta": "$9.250 M.A.",
        "retiros_internos": "**",
        "retiros_externos": "$6.350",
        "trasferencias": "$0",
        "total": "$15.600"
    },
    "Banco Pichincha S.A.":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "$15.990 M.A.",
        "retiros_internos": "**",
        "retiros_externos": "$6.400",
        "trasferencias": "$0",
        "total": "$21.500"
    },
    "Banco Popular":{
        "manejo_cuenta": "$16.422 M.A.",
        "manejo_tarjeta": "$0",
        "retiros_internos": "$2.200",
        "retiros_externos": "$6.400",
        "trasferencias": "$0",
        "total": "$25.022"
    },
    "Banco Santander*":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "**",
        "retiros_internos": "**",
        "retiros_externos": "**",
        "trasferencias": "$1.700",
        "total": "$1.700"
    },
    "Banco Serfinanza S.A.":{
        "manejo_cuenta": "$0",
        "manejo_tarjeta": "$11.900 M.V.",
        "retiros_internos": "**",
        "retiros_externos": "$6.400",
        "trasferencias": "$0",
        "total": "$18.300"
    },
    "Banco Unión":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "$8.100 M.V.",
        "retiros_internos": "**",
        "retiros_externos": "$6.180",
        "trasferencias": "$0",
        "total": "$14.280"
    },
    "Bancolombia":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "$15.99 M.A.",
        "retiros_internos": "$2.950",
        "retiros_externos": "$6.180",
        "trasferencias": "$0",
        "total": "$25.120"
    },
    "Bancoomeva":{
        "manejo_cuenta": "$0",
        "manejo_tarjeta": "$12.000 M.A",
        "retiros_internos": "$0",
        "retiros_externos": "$6.182",
        "trasferencias": "$0",
        "total": "$18.181"
    },
    "BBVA Colombia":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "$14.250 M.A",
        "retiros_internos": "$2.400",
        "retiros_externos": "$6.180",
        "trasferencias": "$2.200",
        "total": "$25.030"
    },
    "Citibank*":{
        "manejo_cuenta": "$0",
        "manejo_tarjeta": "**",
        "retiros_internos": "**",
        "retiros_externos": "**",
        "trasferencias": "$46.450",
        "total": "$46.450"
    },
    "Coopcentral":{
        "manejo_cuenta": "**",
        "manejo_tarjeta": "$0",
        "retiros_internos": "$0",
        "retiros_externos": "$6.000",
        "trasferencias": "$0",
        "total": "$6.000"
    },
    "Itaú":{
        "manejo_cuenta": "$16.500 T.A.",
        "manejo_tarjeta": "$0",
        "retiros_internos": "$0",
        "retiros_externos": "$6.350",
        "trasferencias": "$0",
        "total": "$22.850"
    },
    "Lulo Bank":{
        "manejo_cuenta": "$0",
        "manejo_tarjeta": "$0",
        "retiros_internos": "$0",
        "retiros_externos": "$6.150",
        "trasferencias": "$0",
        "total": "$6.150"
    },
    "Scotiabank Colpatria S.A.":{
        "manejo_cuenta": "$0",
        "manejo_tarjeta": "$0",
        "retiros_internos": "$0",
        "retiros_externos": "$6.480",
        "trasferencias": "$0",
        "total": "$6.480"
    }
}


document.querySelector('#upload').addEventListener('click',() => {
    const keys = Object.keys(banc)
    keys.forEach(key => {
        const docRef = doc(db, 'comparador',`${key}`)
        setDoc(docRef,banc[key])
        .then(() => console.log('Documento Subido'))
        .catch(() => console.log('Error en el documento'))
    })
})
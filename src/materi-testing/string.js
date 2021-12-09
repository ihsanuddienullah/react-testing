export function potonganPajak(gaji) {
    const pajak = 10 / 100;
    const gajiBersih = gaji - gaji * pajak;
    return `Gaji bersih anda Rp${gajiBersih}`;
}

export function sapaan(nama) {
    return `Halo ${nama}`;
}
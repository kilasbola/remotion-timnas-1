const clubLogoCodeMap: { [key: string]: string } = {
    'PSSI': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/2025_Indonesia_National_Football_Team_Badge.png/480px-2025_Indonesia_National_Football_Team_Badge.png',
    'AC Milan': 'https://brandlogos.net/wp-content/uploads/2021/05/ac_milan-logo_brandlogos.net_xh3sl-300x485.png',
};

export const getLogoCode = (clubCode: string): string => {
    return clubLogoCodeMap[clubCode] || ''; // Kode negara tidak valid
};
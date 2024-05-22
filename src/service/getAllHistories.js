const { Firestore } = require('@google-cloud/firestore');

async function getAllHistories() {
    const db = new Firestore();

    return new Promise((resolve, reject) => {
        db.collection('predictions').get()
            .then(snapshot => {
                const data = [];
                snapshot.forEach(doc => {
                    data.push({ id: doc.id, history: { ...doc.data() } });
                });
                resolve(data);
            })
            .catch(error => {
                console.error('Gagal mendapatkan riwayat: ', error);
                reject(error);
            });
    });
}

module.exports = getAllHistories;
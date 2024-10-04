// lib/data.js
export const items = [
    { id: '1', title: 'Artikel Pertama', content: 'Ini adalah konten artikel pertama.' },
    { id: '2', title: 'Artikel Kedua', content: 'Ini adalah konten artikel kedua.' },
    { id: '3', title: 'Artikel Ketiga', content: 'Ini adalah konten artikel ketiga.' },
  ];
  
  export function getAllIds() {
    return items.map(item => ({
      params: { id: item.id },
    }));
  }
  
  export function getItemData(id) {
    return items.find(item => item.id === id);
  }
  
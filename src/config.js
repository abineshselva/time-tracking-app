let productName = 'DailySync';
console.log(process.env.DATABASE_URL);
if (typeof window !== 'undefined') {
  const customProductName = localStorage.getItem('customProductName');
  productName = customProductName || productName;
}

const config = {
  productName,
};

export default config;
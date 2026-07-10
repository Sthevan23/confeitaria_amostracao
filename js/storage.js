/**
 * storage.js — Dados do template (LocalStorage)
 * Dados do site de amostra (LocalStorage).
 */
const Storage = (() => {
  const KEY = 'confeitaria_amostra_data';
  const DATA_VERSION = 2;

  const IMG = {
    hero: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&q=80',
    loja: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=900&q=80',
    bolo1: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
    bolo2: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80',
    bolo3: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80',
    bolo4: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80',
    bolo5: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80',
    bolo6: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&q=80',
    pronto1: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80',
    pronto2: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
    pronto3: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c3b7?w=800&q=80',
    bento1: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&q=80',
    bento2: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=800&q=80',
    doces1: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80',
    doces2: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80',
    destaque1: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&q=80',
    destaque2: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80'
  };

  const defaultData = {
    settings: {
      name: 'Flor de Açúcar',
      tagline: 'Doces feitos com tempo, técnica e afeto',
      logo: '',
      banner: IMG.hero,
      sobreImage: IMG.loja,
      whatsapp: '5531999999999',
      instagram: 'https://www.instagram.com/',
      instagramUser: '@flordeacucar',
      facebook: '',
      email: 'contato@flordeacucar.com.br',
      address: 'Rua das Flores, 120 — Centro',
      hours: 'Seg a Sáb · 9h às 19h · Dom · 9h às 13h',
      followers: '2,4 mil',
      posts: '186',
      mapEmbed: 'https://www.google.com/maps?q=Belo+Horizonte,+MG&output=embed',
      heroBadge: 'Confeitaria artesanal · Encomendas e pronta entrega',
      heroStory: [
        'A Flor de Açúcar nasceu da vontade de transformar ingredientes simples em momentos que as pessoas guardam na memória.',
        'Cada bolo é pensado com calma: massa leve, recheio generoso e acabamento feito à mão.',
        'Este site é um modelo pronto para personalizar com a identidade da sua confeitaria.'
      ],
      sobreText1: 'A <strong>Flor de Açúcar</strong> é um modelo de site para confeitarias artesanais: cardápio, pedidos pelo WhatsApp e galeria de criações.',
      sobreText2: 'Bolos personalizados, pronta entrega e kits especiais — tudo pensado para facilitar o pedido do cliente.'
    },
    auth: {
      email: 'contato@flordeacucar.com.br',
      password: 'demo123'
    },
    categories: [
      { id: 'cat1', name: 'Bolos Personalizados', slug: 'bolos' },
      { id: 'cat2', name: 'Doces', slug: 'doces' },
      { id: 'cat3', name: 'Pronta Entrega', slug: 'pronta-entrega' },
      { id: 'cat4', name: 'Bento Cake', slug: 'bento-cake' },
      { id: 'cat5', name: 'Bolos Destaques', slug: 'bolos-destaques' },
      { id: 'cat6', name: 'Kit Bento e Doces', slug: 'kit-bento-doces' }
    ],
    products: [
      { id: 'p1', name: 'Bolo Floral Champagne', description: 'Bolo de festa com flores comestíveis e cobertura aveludada.', price: 0, categoryId: 'cat1', image: IMG.bolo1, featured: true },
      { id: 'p2', name: 'Bolo Chocolate Belga', description: 'Camadas de chocolate intenso com ganache e morangos.', price: 0, categoryId: 'cat1', image: IMG.bolo2, featured: true },
      { id: 'p3', name: 'Bolo Nude Frutas', description: 'Estilo naked cake com frutas frescas e creme de baunilha.', price: 0, categoryId: 'cat1', image: IMG.bolo3, featured: true },
      { id: 'p4', name: 'Bolo Red Velvet', description: 'Massa vermelha clássica com cream cheese e acabamento limpo.', price: 0, categoryId: 'cat1', image: IMG.bolo4, featured: false },
      { id: 'p5', name: 'Bolo Temático Infantil', description: 'Personalizado com tema, cores e topo à escolha do cliente.', price: 0, categoryId: 'cat1', image: IMG.bolo5, featured: false },
      { id: 'p6', name: 'Bolo Casamento Clássico', description: 'Dois andares com textura lisa e detalhes delicados.', price: 0, categoryId: 'cat1', image: IMG.bolo6, featured: true },
      { id: 'p7', name: 'Bolo do Dia — Chocolate', description: 'Pronta entrega com cobertura de chocolate e brigadeiros.', price: 65, categoryId: 'cat3', image: IMG.pronto1, featured: false },
      { id: 'p8', name: 'Bolo do Dia — Ninho', description: 'Pronta entrega com creme ninho e finalização branca.', price: 75, categoryId: 'cat3', image: IMG.pronto2, featured: false },
      { id: 'p9', name: 'Bolo do Dia — Morango', description: 'Pronta entrega com morangos e chantilly.', price: 95, categoryId: 'cat3', image: IMG.pronto3, featured: false },
      { id: 'p10', name: 'Bento Cake Frase', description: 'Mini bolo na marmita com frase personalizada no topo.', price: 40, categoryId: 'cat4', image: IMG.bento1, featured: false },
      { id: 'p11', name: 'Bento Cake Presente', description: 'Ideal para surpresas rápidas com mensagem especial.', price: 40, categoryId: 'cat4', image: IMG.bento2, featured: false },
      { id: 'p12', name: 'Caixa de Brigadeiros', description: '20 unidades sortidas: tradicional, ninho e belga.', price: 55, categoryId: 'cat2', image: IMG.doces1, featured: false },
      { id: 'p13', name: 'Docinhos Finos', description: 'Seleção de doces para festas e mesas de café.', price: 130, categoryId: 'cat2', image: IMG.doces2, featured: false },
      { id: 'p14', name: 'Bolo Destaque Jardim', description: 'Modelo especial com flores e acabamento premium.', price: 0, categoryId: 'cat5', image: IMG.destaque1, featured: false },
      { id: 'p15', name: 'Bolo Destaque Frutas', description: 'Visual marcante para mesas de festa e ensaios.', price: 0, categoryId: 'cat5', image: IMG.destaque2, featured: false },
      { id: 'p16', name: 'Bento Cake na Marmita', description: 'Bento individual · aprox. 300g · 2 a 3 fatias.', price: 40, categoryId: 'cat6', image: IMG.bento1, featured: false },
      { id: 'p17', name: 'Kit Bento + 6 Doces', description: 'Bento personalizado com 6 docinhos sortidos.', price: 55, categoryId: 'cat6', image: IMG.bento2, featured: false },
      { id: 'p18', name: 'Kit Bento + 16 Doces', description: 'Kit completo para presentear ou comemorar.', price: 65, categoryId: 'cat6', image: IMG.doces1, featured: false }
    ],
    clients: [
      { id: 'c1', name: 'Ana Paula Silva', email: 'ana@email.com', phone: '31987654321', address: 'Centro' },
      { id: 'c2', name: 'Carlos Mendes', email: 'carlos@email.com', phone: '31976543210', address: 'Savassi' },
      { id: 'c3', name: 'Mariana Costa', email: 'mariana@email.com', phone: '31965432109', address: 'Funcionários' }
    ],
    orders: [
      { id: 'o1', number: 'PED-2026-001', clientId: 'c1', clientName: 'Ana Paula Silva', items: [{ productId: 'p1', name: 'Bolo Floral Champagne', qty: 1, price: 189.90 }], total: 189.90, status: 'finalizado', date: '2026-07-01T14:30:00' },
      { id: 'o2', number: 'PED-2026-002', clientId: 'c2', clientName: 'Carlos Mendes', items: [{ productId: 'p10', name: 'Bento Cake Frase', qty: 2, price: 40.00 }, { productId: 'p12', name: 'Caixa de Brigadeiros', qty: 1, price: 55.00 }], total: 135.00, status: 'preparo', date: '2026-07-05T10:15:00' },
      { id: 'o3', number: 'PED-2026-003', clientId: 'c3', clientName: 'Mariana Costa', items: [{ productId: 'p7', name: 'Bolo do Dia — Chocolate', qty: 1, price: 65.00 }], total: 65.00, status: 'entrega', date: '2026-07-06T16:00:00' },
      { id: 'o4', number: 'PED-2026-004', clientId: 'c1', clientName: 'Ana Paula Silva', items: [{ productId: 'p3', name: 'Bolo Nude Frutas', qty: 1, price: 199.90 }], total: 199.90, status: 'novo', date: '2026-07-07T09:00:00' }
    ],
    reviews: [
      { id: 'r1', name: 'Juliana Ferreira', text: 'O bolo ficou lindo e o sabor impecável. Pedido pelo WhatsApp foi super fácil!', rating: 5, avatar: 'JF' },
      { id: 'r2', name: 'Roberto Almeida', text: 'Encomendei um temático para minha filha. Entrega no horário e acabamento perfeito.', rating: 5, avatar: 'RA' },
      { id: 'r3', name: 'Camila Santos', text: 'O bento cake com frase foi o presente mais fofo. Já virei cliente fiel.', rating: 5, avatar: 'CS' },
      { id: 'r4', name: 'Fernando Lima', text: 'Pronta entrega deliciosa. Site organizado e fácil de montar o pedido.', rating: 5, avatar: 'FL' }
    ],
    faq: [
      { id: 'f1', question: 'Como faço meu pedido?', answer: 'Escolha o produto no cardápio, monte massa/recheio/tamanho e envie pelo WhatsApp. Confirmamos disponibilidade e prazo na hora.' },
      { id: 'f2', question: 'Vocês têm pronta entrega?', answer: 'Sim. Há opções do dia e também a possibilidade de montar para retirar com antecedência mínima combinada no atendimento.' },
      { id: 'f3', question: 'Fazem bolos personalizados?', answer: 'Sim. Criamos bolos temáticos e sob encomenda. Peça com antecedência para temas especiais.' },
      { id: 'f4', question: 'Quais formas de pagamento?', answer: 'PIX, cartão e dinheiro. As opções são confirmadas no momento do pedido.' },
      { id: 'f5', question: 'Onde vocês ficam?', answer: 'Rua das Flores, 120 — Centro. Atendemos por delivery e retirada — confirme disponibilidade pelo WhatsApp.' }
    ],
    gallery: [
      IMG.bolo1, IMG.bolo2, IMG.bolo3, IMG.bolo4, IMG.bolo5, IMG.bolo6,
      IMG.pronto1, IMG.pronto2, IMG.pronto3, IMG.bento1, IMG.bento2,
      IMG.doces1, IMG.doces2, IMG.destaque1, IMG.destaque2, IMG.loja
    ]
  };

  function init() {
    if (!localStorage.getItem(KEY)) {
      localStorage.setItem(KEY, JSON.stringify({ ...defaultData, version: DATA_VERSION }));
      return;
    }

    const data = JSON.parse(localStorage.getItem(KEY));
    if ((data.version || 0) < 2) {
      data.settings = {
        ...data.settings,
        sobreText1: defaultData.settings.sobreText1,
        sobreText2: defaultData.settings.sobreText2
      };
      data.faq = defaultData.faq;
    }
    if ((data.version || 0) < DATA_VERSION) {
      data.version = DATA_VERSION;
      localStorage.setItem(KEY, JSON.stringify(data));
    }
  }

  function getAll() {
    init();
    return JSON.parse(localStorage.getItem(KEY));
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function getSettings() { return getAll().settings; }
  function saveSettings(settings) {
    const data = getAll();
    data.settings = { ...data.settings, ...settings };
    save(data);
  }

  function getProducts() { return getAll().products; }
  function saveProducts(products) {
    const data = getAll();
    data.products = products;
    save(data);
  }

  function getCategories() { return getAll().categories; }
  function saveCategories(categories) {
    const data = getAll();
    data.categories = categories;
    save(data);
  }

  function getClients() { return getAll().clients; }
  function saveClients(clients) {
    const data = getAll();
    data.clients = clients;
    save(data);
  }

  function getOrders() { return getAll().orders; }
  function saveOrders(orders) {
    const data = getAll();
    data.orders = orders;
    save(data);
  }

  function getReviews() { return getAll().reviews; }
  function getFaq() { return getAll().faq; }
  function getGallery() { return getAll().gallery; }

  function login(email, password) {
    const { auth } = getAll();
    return auth.email === email && auth.password === password;
  }

  function updatePassword(newPassword) {
    const data = getAll();
    data.auth.password = newPassword;
    save(data);
  }

  function generateId(prefix) {
    return prefix + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  function generateOrderNumber() {
    const orders = getOrders();
    const year = new Date().getFullYear();
    const num = String(orders.length + 1).padStart(3, '0');
    return `PED-${year}-${num}`;
  }

  function getCategoryName(categoryId) {
    const cat = getCategories().find(c => c.id === categoryId);
    return cat ? cat.name : 'Outros';
  }

  function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function getDashboardStats() {
    const orders = getOrders();
    const finished = orders.filter(o => o.status === 'finalizado');
    const totalSales = finished.reduce((sum, o) => sum + o.total, 0);
    const today = new Date().toISOString().split('T')[0];
    const todaySales = finished.filter(o => o.date.startsWith(today)).reduce((sum, o) => sum + o.total, 0);
    const month = new Date().toISOString().slice(0, 7);
    const monthSales = finished.filter(o => o.date.startsWith(month)).reduce((sum, o) => sum + o.total, 0);

    return {
      totalOrders: orders.length,
      totalSales,
      totalClients: getClients().length,
      totalProducts: getProducts().length,
      todaySales,
      monthSales
    };
  }

  function getMonthlyRevenue() {
    const orders = getOrders().filter(o => o.status === 'finalizado');
    const months = {};
    const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    for (let i = 5; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      months[key] = { label: monthNames[d.getMonth()], value: 0 };
    }

    orders.forEach(o => {
      const key = o.date.slice(0, 7);
      if (months[key]) months[key].value += o.total;
    });

    return Object.values(months);
  }

  return {
    init, getAll, save,
    getSettings, saveSettings,
    getProducts, saveProducts,
    getCategories, saveCategories,
    getClients, saveClients,
    getOrders, saveOrders,
    getReviews, getFaq, getGallery,
    login, updatePassword,
    generateId, generateOrderNumber,
    getCategoryName, formatCurrency,
    getDashboardStats, getMonthlyRevenue
  };
})();

Storage.init();

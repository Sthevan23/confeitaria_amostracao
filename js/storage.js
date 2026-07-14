/**
 * storage.js — Dados do template (LocalStorage)
 * Dados do site de amostra (LocalStorage).
 */
const Storage = (() => {
  const KEY = 'confeitaria_amostra_data';
  const DATA_VERSION = 7;

  const IMG = {
    hero: 'imagens/hero.jpg',
    loja: 'imagens/loja.jpg',
    bolo1: 'imagens/bolo1.jpg',
    bolo2: 'imagens/bolo2.jpg',
    bolo3: 'imagens/bolo3.jpg',
    bolo4: 'imagens/bolo4.jpg',
    bolo5: 'imagens/bolo5.jpg',
    bolo6: 'imagens/bolo6.jpg',
    bolo7: 'imagens/bolo7.jpg',
    bolo8: 'imagens/bolo8.jpg',
    pronto1: 'imagens/pronto1.jpg',
    pronto2: 'imagens/pronto2.jpg',
    pronto3: 'imagens/pronto3.jpg',
    pronto4: 'imagens/pronto4.jpg',
    bento1: 'imagens/bento1.jpg',
    bento2: 'imagens/bento2.jpg',
    bento3: 'imagens/bento3.jpg',
    bento4: 'imagens/bento4.jpg',
    doces1: 'imagens/doces1.jpg',
    doces2: 'imagens/doces2.jpg',
    destaque1: 'imagens/destaque1.jpg',
    destaque2: 'imagens/destaque2.jpg',
    destaque3: 'imagens/destaque3.jpg',
    destaque4: 'imagens/destaque4.jpg',
    galeria1: 'imagens/galeria1.jpg',
    galeria2: 'imagens/galeria2.jpg',
    galeria3: 'imagens/galeria3.jpg',
    galeria4: 'imagens/galeria4.jpg',
    galeria5: 'imagens/galeria5.jpg',
    galeria6: 'imagens/galeria6.jpg',
    galeria7: 'imagens/galeria7.jpg',
    galeria8: 'imagens/galeria8.jpg',
    galeria9: 'imagens/galeria9.jpg',
    galeria10: 'imagens/galeria10.jpg',
    galeria11: 'imagens/galeria11.jpg',
    galeria12: 'imagens/galeria12.jpg'
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
      { id: 'cat1', name: 'Personalizados', slug: 'bolos' },
      { id: 'cat2', name: 'Doces', slug: 'doces' },
      { id: 'cat3', name: 'Pronta Entrega', slug: 'pronta-entrega' },
      { id: 'cat4', name: 'Bento Cake', slug: 'bento-cake' },
      { id: 'cat5', name: 'Destaques', slug: 'bolos-destaques' },
      { id: 'cat6', name: 'Kits', slug: 'kit-bento-doces' }
    ],
    products: [
      { id: 'p1', name: 'Bolo de Casamento', description: 'Bolo elegante para casamentos, com acabamento limpo e flores.', price: 0, categoryId: 'cat1', image: IMG.bolo1, featured: true },
      { id: 'p2', name: 'Bolo de Chocolate', description: 'Camadas de chocolate com cobertura cremosa e visual marcante.', price: 0, categoryId: 'cat1', image: IMG.bolo2, featured: true },
      { id: 'p3', name: 'Bolo de Aniversário', description: 'Bolo festivo personalizado para comemorações especiais.', price: 0, categoryId: 'cat1', image: IMG.bolo3, featured: true },
      { id: 'p4', name: 'Bolo com Frutas', description: 'Decoração com frutas frescas e creme suave.', price: 0, categoryId: 'cat1', image: IMG.bolo4, featured: false },
      { id: 'p5', name: 'Bolo Floral', description: 'Acabamento delicado com flores e tons suaves.', price: 0, categoryId: 'cat1', image: IMG.bolo5, featured: false },
      { id: 'p6', name: 'Bolo Naked Cake', description: 'Estilo rústico com camadas aparentes e frutas.', price: 0, categoryId: 'cat1', image: IMG.bolo6, featured: true },
      { id: 'p19', name: 'Bolo Red Velvet', description: 'Clássico red velvet com cream cheese.', price: 0, categoryId: 'cat1', image: IMG.bolo7, featured: false },
      { id: 'p20', name: 'Bolo Decorado Premium', description: 'Modelo especial para festas e ensaios.', price: 0, categoryId: 'cat1', image: IMG.bolo8, featured: false },
      { id: 'p7', name: 'Bolo do Dia — Chocolate', description: 'Opção de pronta entrega com cobertura de chocolate.', price: 65, categoryId: 'cat3', image: IMG.pronto1, featured: false },
      { id: 'p8', name: 'Bolo do Dia — Baunilha', description: 'Pronta entrega com cobertura clara e finalização suave.', price: 75, categoryId: 'cat3', image: IMG.pronto2, featured: false },
      { id: 'p9', name: 'Bolo do Dia — Frutas', description: 'Pronta entrega com frutas e chantilly.', price: 95, categoryId: 'cat3', image: IMG.pronto3, featured: false },
      { id: 'p21', name: 'Bolo do Dia — Brigadeiro', description: 'Pronta entrega com acabamento em chocolate.', price: 70, categoryId: 'cat3', image: IMG.pronto4, featured: false },
      { id: 'p10', name: 'Bento Cake Frase', description: 'Mini bolo com frase personalizada no topo.', price: 40, categoryId: 'cat4', image: IMG.bento1, featured: false },
      { id: 'p11', name: 'Bento Cake Presente', description: 'Ideal para surpresas e datas especiais.', price: 40, categoryId: 'cat4', image: IMG.bento2, featured: false },
      { id: 'p22', name: 'Bento Cake Fofo', description: 'Mini bolo delicado para presentear.', price: 40, categoryId: 'cat4', image: IMG.bento3, featured: false },
      { id: 'p23', name: 'Bento Cake Especial', description: 'Versão especial com decoração artesanal.', price: 40, categoryId: 'cat4', image: IMG.bento4, featured: false },
      { id: 'p12', name: 'Caixa de Brigadeiros', description: 'Docinhos sortidos para festas e presentes.', price: 55, categoryId: 'cat2', image: IMG.doces1, featured: false },
      { id: 'p13', name: 'Docinhos Finos', description: 'Seleção de doces para mesa de festa.', price: 130, categoryId: 'cat2', image: IMG.doces2, featured: false },
      { id: 'p14', name: 'Bolo Destaque Jardim', description: 'Modelo premium com visual sofisticado.', price: 0, categoryId: 'cat5', image: IMG.destaque1, featured: false },
      { id: 'p15', name: 'Bolo Destaque Celebração', description: 'Para mesas de festa e momentos especiais.', price: 0, categoryId: 'cat5', image: IMG.destaque2, featured: false },
      { id: 'p24', name: 'Bolo Destaque Luxo', description: 'Acabamento elegante e presença marcante.', price: 0, categoryId: 'cat5', image: IMG.destaque3, featured: false },
      { id: 'p25', name: 'Bolo Destaque Festa', description: 'Ideal para aniversários e comemorações.', price: 0, categoryId: 'cat5', image: IMG.destaque4, featured: false },
      { id: 'p16', name: 'Bento Cake na Marmita', description: 'Bento individual · aprox. 300g · 2 a 3 fatias.', price: 40, categoryId: 'cat6', image: IMG.bento1, featured: false },
      { id: 'p17', name: 'Kit Bento + 6 Doces', description: 'Bento personalizado com 6 docinhos.', price: 55, categoryId: 'cat6', image: IMG.bento2, featured: false },
      { id: 'p18', name: 'Kit Bento + 16 Doces', description: 'Kit completo para presentear ou comemorar.', price: 65, categoryId: 'cat6', image: IMG.bento3, featured: false }
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
      IMG.bolo1, IMG.bolo2, IMG.bolo3, IMG.bolo4, IMG.bolo5, IMG.bolo6, IMG.bolo7, IMG.bolo8,
      IMG.pronto1, IMG.pronto2, IMG.pronto3, IMG.pronto4,
      IMG.bento1, IMG.bento2, IMG.bento3, IMG.bento4,
      IMG.destaque1, IMG.destaque2, IMG.destaque3, IMG.destaque4,
      IMG.galeria1, IMG.galeria2, IMG.galeria3, IMG.galeria4,
      IMG.galeria5, IMG.galeria6, IMG.galeria7, IMG.galeria8,
      IMG.galeria9, IMG.galeria10, IMG.galeria11, IMG.galeria12
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
    if ((data.version || 0) < 3) {
      data.categories = defaultData.categories;
    }
    if ((data.version || 0) < 4) {
      data.settings = {
        ...data.settings,
        banner: defaultData.settings.banner,
        sobreImage: defaultData.settings.sobreImage
      };
      data.products = defaultData.products;
      data.gallery = defaultData.gallery;
    }
    if ((data.version || 0) < 5) {
      data.settings = {
        ...data.settings,
        banner: defaultData.settings.banner,
        sobreImage: defaultData.settings.sobreImage
      };
      data.products = defaultData.products;
      data.gallery = defaultData.gallery;
    }
    if ((data.version || 0) < 6) {
      data.settings = {
        ...data.settings,
        banner: defaultData.settings.banner,
        sobreImage: defaultData.settings.sobreImage
      };
      data.products = defaultData.products;
      data.gallery = defaultData.gallery;
    }
    if ((data.version || 0) < 7) {
      // Garante fotos locais (corrige cache antigo com Unsplash/vazio)
      data.settings = {
        ...data.settings,
        banner: defaultData.settings.banner,
        sobreImage: defaultData.settings.sobreImage,
        logo: data.settings.logo && String(data.settings.logo).startsWith('imagens/')
          ? data.settings.logo
          : ''
      };
      data.products = defaultData.products;
      data.gallery = defaultData.gallery;
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

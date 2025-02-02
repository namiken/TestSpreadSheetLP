import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ children, id }: { children: any, id: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen p-8"
      id={id}
    >
      {children}
    </motion.div>
  );
};

const LandingPage = () => {
  const menuItems = [
    { id: 'home', label: 'ホーム' },
    { id: 'about', label: '私たちについて' },
    { id: 'services', label: 'サービス' },
    { id: 'contact', label: 'お問い合わせ' }
  ];

  return (
    <div>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex justify-center py-4 space-x-8">
            {menuItems.map(item => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-16">
        <Section id="home">
          <div className="bg-blue-100 rounded-lg p-8">
            <h1 className="text-4xl font-bold mb-4">ようこそ</h1>
            <p className="text-xl">素敵なランディングページへ</p>
          </div>
        </Section>

        <Section id="about">
          <div className="bg-green-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">私たちについて</h2>
            <p>会社の説明がここに入ります</p>
          </div>
        </Section>

        <Section id="services">
          <div className="bg-yellow-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">サービス</h2>
            <p>提供サービスの説明がここに入ります</p>
          </div>
        </Section>

        <Section id="contact">
          <div className="bg-purple-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
            <p>連絡先情報がここに入ります</p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default LandingPage;
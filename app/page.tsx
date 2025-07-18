export default function Home() {
  return (
    <div className="page-container">
      <div className="logo-container">
        <div className="logo">Z</div>
      </div>
      
      <div className="tagline">
        Acabou o dinheiro no fim do mês? A ZenMind te ajuda a economizar pelo WhatsApp
      </div>
      
      <div className="subtitle">
        Um consultor financeiro no seu bolso, disponível 24/7
      </div>
      
      <div className="mission-text">
        <p className="mission-description">
          Personalizado para você através de inteligência artificial. Nossa missão é ajudar 
          todos os brasileiros a gerenciar melhor seu dinheiro, poupar mais e evitar dívidas 
          desnecessárias, para atingirem seus objetivos.
        </p>
        
        <div className="features">
          <div className="feature-item">
            <span className="feature-icon">⏰</span>
            <span>No seu tempo, do seu jeito</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💡</span>
            <span>Dicas que cabem na sua realidade</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📈</span>
            <span>Dinheiro sobrando todo mês</span>
          </div>
        </div>
      </div>

      <div className="trust-elements">
        <div className="trust-item">
          <span className="trust-icon">🔒</span>
          <span>Seus dados protegidos pela Lei LGPD</span>
        </div>
        <div className="trust-item">
          <span className="trust-icon">🏢</span>
          <span>Parceiro oficial WhatsApp Business</span>
        </div>
        <div className="trust-item">
          <span className="trust-icon">👥</span>
          <span>+1.000 brasileiros já economizando</span>
        </div>
      </div>

      <div className="whatsapp-cta">
        <h2>Comece Agora - 100% Grátis</h2>
        <p>Conheça o Arnaldo, seu assistente financeiro pessoal, e transforme sua vida financeira</p>
        
        <a 
          href="https://wa.me/5511939041011?text=Oi%20Arnaldo!%20Quero%20come%C3%A7ar%20a%20economizar"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <svg viewBox="0 0 24 24" className="whatsapp-icon">
            <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Começar Conversa Grátis
        </a>
        
        <div className="phone-number">
          ou adicione: <strong>+55 11 93904-1011</strong>
        </div>
        
        <p className="cta-note">
          🎁 Primeiros 1.000 usuários: consultoria grátis para sempre
        </p>
      </div>
      
      <footer className="footer">
        <div className="footer-links">
          <a href="/privacy">Política de Privacidade</a>
          <a href="/terms">Termos de Uso</a>
        </div>
        <div className="footer-text">
          © 2024 ZenMind by PQG Holdings. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
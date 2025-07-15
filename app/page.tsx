export default function Home() {
  return (
    <div className="page-container">
      <div className="logo-container">
        <div className="logo">Z</div>
      </div>
      
      <div className="tagline">
        ZenMind, seu consultor financeiro via WhatsApp
      </div>
      
      <div className="mission-text">
        <p className="mission-description">
          Democratizamos o acesso a consultoria financeira através de inteligência artificial.
          Nossa missão é ajudar brasileiros, especialmente de menor renda, a gerenciar melhor 
          seu dinheiro, poupar mais e evitar dívidas desnecessárias.
        </p>
        
        <div className="features">
          <div className="feature-item">
            <span className="feature-icon">💬</span>
            <span>Consultoria via WhatsApp</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🤖</span>
            <span>Inteligência Artificial Avançada</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💰</span>
            <span>Foco em Poupança e Controle</span>
          </div>
        </div>
      </div>

      <div className="coming-soon">
        <h2>Em Breve</h2>
        <p>Seja um dos primeiros a ter acesso ao ZenMind e ganhe vantagens exclusivas</p>
        
        <form className="waitlist-form">
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="email-input"
              required 
            />
            <button type="submit" className="submit-btn">
              Entrar na Lista
            </button>
          </div>
          <p className="form-note">
            ✨ Acesso antecipado + 3 meses grátis para os primeiros usuários
          </p>
        </form>
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
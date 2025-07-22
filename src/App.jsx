import { useState, useEffect, useRef } from 'react'
import { Ticket, Calendar, Send, Volume2, VolumeX, Maximize2, X, Waves, Phone, MessageCircle } from 'lucide-react'
import './App.css'
import AnimatedMedia from '@/components/AnimatedMedia.jsx'

// Import video assets
import bgVideo from '/bgvideo.mp4'
import posterVideo from '/poster.webm'
import circleVideo1 from '/circle1.mp4'
import circleVideo2 from '/circle2.mp4'
import logoImage from '/logozhara.png'

function App() {
  const [showTicketMenu, setShowTicketMenu] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [eventVideoMuted, setEventVideoMuted] = useState(true)
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(false)
  const [showBookingSubmenu, setShowBookingSubmenu] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  const [bubblesAnimation, setBubblesAnimation] = useState(true)
  const [circleVideoMuted, setCircleVideoMuted] = useState(true)
  const [circleVideoSrc, setCircleVideoSrc] = useState(null)
  const bookingBtnRef = useRef(null)
  const submenuRef = useRef(null)
  const circleVideoRef = useRef(null)


  useEffect(() => {
    // Set Telegram WebApp header color to summer blue
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.setHeaderColor('#0099ff');
    }
    
    // Dispatch custom userGesture event on first actual user interaction to unlock videos
    const gestureHandler = () => {
      window.dispatchEvent(new Event('userGesture'));
    };
    document.addEventListener('pointerdown', gestureHandler, { once: true });
    
    // Hide splash screen after 3 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    
    // Randomly select circle video
    setCircleVideoSrc(Math.random() < 0.5 ? circleVideo1 : circleVideo2);
    
    return () => {
      clearTimeout(splashTimer);
    };
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (showBookingSubmenu && 
          bookingBtnRef.current && 
          !bookingBtnRef.current.contains(e.target) &&
          submenuRef.current &&
          !submenuRef.current.contains(e.target)) {
        setShowBookingSubmenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showBookingSubmenu])

  const events = [
    {
      id: 'july25',
      title: 'ЖАРА | 25.07',
      date: '25 июля, пятница',
      time: '23:00 - 07:00',
      fullDate: new Date('2025-07-25T23:00:00'),
      description: `Ну что, готовы к настоящему лету? ☀️

Пока погода в Питере не радует VNVNC берет всё в свои руки создаёт настоящую ЖАРУ!

Каждый сантиметр пространства будет пропитан вайбом полного отрыва. 🕶️

Представьте:

Масштабная пенная вечеринка прямо в центре зала, и бассейн с шариками – теперь это ваша новая психотерапия, только без душных разговоров. 🫧

Просто забудьте о скуке и погрузитесь в этот безумный вайб, где каждый уголок VNVNC станет зоной отрыва. 

Готовы прожариться по полной? 🤩

💸Билеты тут

FC/DC 18+

С собой оригиналы документов удостоверяющие личность. 

(Паспорт/права/военный билет)

*билет и наличие брони столов дает право пройти без очереди, но не отменяет FC 

📍Конюшенная 2В`,
      poster: posterVideo,
      video: posterVideo,
      tcEvent: '687267a052cc6634496104ba',
      tcToken: 'eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjMyMDZlZTc4NzQ5MDk3YzU5MmE2Njk3In0.o8XKf5PO_f33Eg3RIeUe2PYBEeuy4o2yI4vh6qQ21T8',
      activities: [
        'Пенная вечеринка 🫧',
        'Спешал коктейли 🍸',
        'Фотозона 📸',
        'Водные пистолеты 🔫'
      ]
    },
    {
      id: 'july26',
      title: 'ЖАРА | 26.07',
      date: '26 июля, суббота',
      time: '23:00 - 07:00',
      fullDate: new Date('2025-07-26T23:00:00'),
      description: `Второй день обещает быть еще более жарким!

Этот день точно не забудется:

— Масштабная пенная вечеринка — погрузитесь в атмосферу настоящего летнего вайба! Пена, музыка и много веселья! 🫧

— Шоу мыльных пузырей — представление от человека-невидимки, который покажет мыльные пузыри так, как ты никогда раньше не видел! 🥰

— Перфоманс на сцене — иммерсивное шоу с бассейном из шариков и водными пистолетами. Это точно не останется незамеченным, гарантируем! 🤩

— Фотозона — фиксируй момент, чтобы он остался с тобой навсегда.

— Специальные коктейли — пей и наслаждайся атмосферой жаркого лета! 📸

FC/DC 18+

С собой оригиналы документов удостоверяющие личность.

(Паспорт/права/военный билет)

*билет и наличие брони столов дает право пройти без очереди, но не отменяет FC

📍Конюшенная 2В`,
      poster: posterVideo,
      video: posterVideo,
      tcEvent: '687268af20e08ad668516801',
      tcToken: 'eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjMyMDZlZTc4NzQ5MDk3YzU5MmE2Njk3In0.o8XKf5PO_f33Eg3RIeUe2PYBEeuy4o2yI4vh6qQ21T8',
      activities: [
        'Масштабная пенная вечеринка 🫧',
        'Шоу мыльных пузырей 🥰',
        'Перфоманс с бассейном из шариков 🤩',
        'Водные пистолеты 🔫',
        'Фотозона 📸',
        'Специальные коктейли 🍸'
      ]
    }
  ]

  const handleTicketClick = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setShowTicketMenu(true)
  }

  const handleEventSelect = (event) => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setSelectedEvent(event)
    setShowTicketMenu(false)
    setEventVideoMuted(true)
  }

  const handleBookingClick = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setShowBookingSubmenu(!showBookingSubmenu);
  }

  const openPhoneNumber = () => {
    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light');
    if (window.Telegram?.WebApp && window.Telegram.WebApp.initData) {
      window.Telegram.WebApp.openTelegramLink('https://t.me/iv?url=tel:+79214104440');
    } else {
      window.location.href = 'tel:+79214104440';
    }
    setShowBookingSubmenu(false);
  }

  const openTelegramBot = () => {
    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light');
    if (window.Telegram?.WebApp && window.Telegram.WebApp.initData) {
      window.Telegram.WebApp.openTelegramLink('https://t.me/vnvncbattlebot');
    } else {
      window.open('https://t.me/vnvncbattlebot', '_blank');
    }
    setShowBookingSubmenu(false);
  }

  const openTelegramChannel = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    if (window.Telegram?.WebApp && window.Telegram.WebApp.initData) {
      window.Telegram.WebApp.openTelegramLink('https://t.me/vnvnc_club');
    } else {
      window.open('https://t.me/vnvnc_club', '_blank');
    }
  }


  const toggleEventMute = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setEventVideoMuted(!eventVideoMuted)
  }

  const showFullscreen = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setShowFullscreenVideo(true)
  }

  const closeFullscreenVideo = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setShowFullscreenVideo(false)
  }

  const toggleCircleVideoMute = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setCircleVideoMuted(!circleVideoMuted)
  }

  return (
    <>
      {/* Splash Screen */}
      {showSplash && (
        <div className="splash-screen">
          <div className="splash-content">
            <h1 className="splash-title">ЖАРА</h1>
            <p className="splash-subtitle">25-26 ИЮЛЯ</p>
            <div className="splash-waves">
              <Waves size={48} />
            </div>
          </div>
        </div>
      )}

      {/* Background Video */}
      <video 
        className="background-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Animated Bubbles */}
      {bubblesAnimation && (
        <div className="bubbles-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="bubble" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Circle Video */}
      {circleVideoSrc && (
        <div className={`circle-video-container ${!circleVideoMuted ? 'expanded' : ''}`}>
          <video 
            ref={circleVideoRef}
            className="circle-video"
            src={circleVideoSrc}
            autoPlay
            loop
            muted={circleVideoMuted}
            playsInline
            onClick={toggleCircleVideoMute}
          />
          <div className="circle-video-overlay" onClick={toggleCircleVideoMute}>
            {circleVideoMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <div className="app-container">
        {/* Summer Logo */}
        <div className="summer-logo">
          <img src={logoImage} alt="VNVNC ЖАРА" className="logo-image" />
        </div>

        {/* Main Buttons */}
        <div className="main-buttons">
          <button className="summer-button ticket-button" onClick={handleTicketClick}>
            <Ticket size={24} className="button-icon" />
            <span>БИЛЕТЫ</span>
          </button>
          
          <button className="summer-button booking-button" onClick={handleBookingClick} ref={bookingBtnRef}>
            <Calendar size={24} className="button-icon" />
            <span>БРОНЬ СТОЛОВ</span>
          </button>

          <button className="summer-button telegram-button" onClick={openTelegramChannel}>
            <Send size={24} className="button-icon" />
            <span>TELEGRAM</span>
          </button>
        </div>

        {/* Booking Submenu */}
        {showBookingSubmenu && (
          <div className="booking-submenu" ref={submenuRef}>
            <button onClick={openPhoneNumber} className="submenu-item">
              <Phone size={20} />
              <span>Позвонить</span>
            </button>
            <button onClick={openTelegramBot} className="submenu-item">
              <MessageCircle size={20} />
              <span>Telegram бот</span>
            </button>
          </div>
        )}

      </div>

      {/* Ticket Menu */}
      {showTicketMenu && (
        <div className="ticket-menu-overlay" onClick={() => setShowTicketMenu(false)}>
          <div className="ticket-menu" onClick={(e) => e.stopPropagation()}>
            <div className="ticket-menu-header">
              <h2>ВЫБЕРИТЕ ДЕНЬ</h2>
              <button className="close-button" onClick={() => setShowTicketMenu(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="events-list">
              {events.map(event => (
                <button 
                  key={event.id} 
                  className="event-item"
                  onClick={() => handleEventSelect(event)}
                >
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                  <p className="event-time">{event.time}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Selected Event Details */}
      {selectedEvent && (
        <div className="event-details-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="event-details" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedEvent(null)}>
              <X size={24} />
            </button>
            
            <div className="event-video-container">
              <AnimatedMedia 
                className="event-video"
                mediaSrc={selectedEvent.video}
                isVideo={true}
                muted={eventVideoMuted}
                loop={true}
                autoPlay={true}
              />
              <div className="video-controls">
                <button onClick={toggleEventMute} className="control-button">
                  {eventVideoMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <button onClick={showFullscreen} className="control-button">
                  <Maximize2 size={20} />
                </button>
              </div>
            </div>
            
            <div className="event-info">
              <h3 className="event-title">{selectedEvent.title}</h3>
              <p className="event-date-time">{selectedEvent.date} в {selectedEvent.time}</p>
              
              {selectedEvent.activities && (
                <div className="activities-section">
                  <h4>Активности:</h4>
                  <ul className="activities-list">
                    {selectedEvent.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <p className="event-description">{selectedEvent.description}</p>
              
              <div 
                data-tc-event={selectedEvent.tcEvent}
                data-tc-token={selectedEvent.tcToken}
                style={{ display: 'block', width: '100%' }}
              >
                <button 
                  className="buy-ticket-button"
                  style={{ width: '100%' }}
                  onTouchStart={() => {
                    if (window.Telegram?.WebApp?.HapticFeedback) {
                      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
                    }
                  }}
                >
                  КУПИТЬ БИЛЕТ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Video */}
      {showFullscreenVideo && selectedEvent && (
        <div className="fullscreen-video-overlay">
          <button className="fullscreen-close" onClick={closeFullscreenVideo}>
            <X size={24} />
          </button>
          <video 
            className="fullscreen-video"
            src={selectedEvent.video}
            autoPlay
            loop
            muted={eventVideoMuted}
            playsInline
            controls
          />
        </div>
      )}

    </>
  )
}

export default App
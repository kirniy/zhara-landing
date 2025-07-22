import { useState, useEffect, useRef } from 'react'
import { Ticket, Calendar, Send, Volume2, VolumeX, Maximize2, X, Phone, MessageCircle } from 'lucide-react'
import './App.css'

// Import assets
import logoImage from '/zharaloader.svg'

function App() {
  const [showTicketMenu, setShowTicketMenu] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [eventVideoMuted, setEventVideoMuted] = useState(true)
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  const [circleVideoMuted, setCircleVideoMuted] = useState(true)
  const [circleVideoSrc, setCircleVideoSrc] = useState(null)
  const [mediaLoaded, setMediaLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const bookingBtnRef = useRef(null)
  const circleVideoRef = useRef(null)
  const bgVideoRef = useRef(null)


  useEffect(() => {
    // Set Telegram WebApp header color to red
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.setHeaderColor('#f6121a');
    }
    
    // Debug TC widget loading
    console.log('[TC Debug] Page loaded, checking TC widget...');
    console.log('[TC Debug] TC widget script tag:', document.querySelector('script[src*="tcwidget"]'));
    console.log('[TC Debug] window.ticketsCloudWidget on load:', window.ticketsCloudWidget);
    
    // Wait a bit and check again
    setTimeout(() => {
      console.log('[TC Debug] After 1s - window.ticketsCloudWidget:', window.ticketsCloudWidget);
    }, 1000);
    
    // Dispatch custom userGesture event on first actual user interaction to unlock videos
    const gestureHandler = () => {
      window.dispatchEvent(new Event('userGesture'));
    };
    document.addEventListener('pointerdown', gestureHandler, { once: true });
    
    // Randomly select circle video
    setCircleVideoSrc(Math.random() < 0.5 ? '/circle1.mp4' : '/circle2.mp4');
    
    // Preload only critical assets (not bgvideo - let it load in background)
    const mediaAssets = [
      '/zharaloader.svg'
      // Don't preload videos - they can load after splash
    ];
    
    let loadedCount = 0;
    const totalAssets = mediaAssets.length;
    
    const checkAllLoaded = () => {
      loadedCount++;
      setLoadingProgress((loadedCount / totalAssets) * 100);
      if (loadedCount === totalAssets) {
        setMediaLoaded(true);
        // Wait a bit to show complete loading, then hide splash
        setTimeout(() => {
          setShowSplash(false);
        }, 500);
      }
    };
    
    // Preload images
    mediaAssets.forEach(src => {
      if (src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.webp')) {
        const img = new Image();
        img.onload = checkAllLoaded;
        img.onerror = checkAllLoaded; // Count errors too to avoid infinite loading
        img.src = src;
      } else if (src.endsWith('.svg')) {
        const img = new Image();
        img.onload = checkAllLoaded;
        img.onerror = checkAllLoaded;
        img.src = src;
      }
    });
  }, [])

  // Removed booking submenu click outside handler

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

FC/DC 18+

С собой оригиналы документов удостоверяющие личность. 

(Паспорт/права/военный билет)

*билет и наличие брони столов дает право пройти без очереди, но не отменяет FC 

📍Конюшенная 2В`,
      poster: '/poster.webm',
      video: '/poster.webm',
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
      poster: '/poster.webm',
      video: '/poster.webm',
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
      window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }
    setShowTicketMenu(true)
  }

  const handleEventSelect = (event) => {
    console.log('[TC Debug] Event selected:', event.title);
    console.log('[TC Debug] TC Event ID:', event.tcEvent);
    console.log('[TC Debug] TC Token:', event.tcToken);
    
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }
    setSelectedEvent(event)
    setShowTicketMenu(false)
    setEventVideoMuted(true)
    
    // Re-initialize TC widget for dynamically added elements
    setTimeout(() => {
      console.log('[TC Debug] Checking TC widget availability...');
      console.log('[TC Debug] window.ticketsCloudWidget:', window.ticketsCloudWidget);
      
      // Find the TC wrapper element
      const tcWrapper = document.querySelector('[data-tc-event="' + event.tcEvent + '"]');
      console.log('[TC Debug] TC wrapper element found:', tcWrapper);
      
      if (window.ticketsCloudWidget && window.ticketsCloudWidget.init) {
        console.log('[TC Debug] Calling ticketsCloudWidget.init()');
        window.ticketsCloudWidget.init();
        
        // After init, check if widget processed our element
        setTimeout(() => {
          const tcIframe = document.querySelector('.tc-widget-frame_popup');
          const tcButton = tcWrapper?.querySelector('button');
          
          if (!tcIframe && tcButton) {
            console.log('[TC Debug] Widget didn\'t process our element, setting up manual click handler');
            
            // Add click handler directly to our button
            const handleBuyClick = (e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('[TC Debug] Manual buy button clicked');
              
              // Try direct window.open as fallback for TC widget
              if (!document.querySelector('.tc-widget-frame_popup')) {
                console.log('[TC Debug] No TC popup found, opening direct link');
                const tcUrl = `https://ticketscloud.com/v1/widgets/common?event=${event.tcEvent}&token=${event.tcToken}&partner=63206ee787490997c592a6697`;
                window.open(tcUrl, '_blank', 'width=600,height=800');
              }
            };
            
            tcButton.removeEventListener('click', handleBuyClick);
            tcButton.addEventListener('click', handleBuyClick);
          }
        }, 500);
      } else {
        console.log('[TC Debug] TC widget not available');
      }
      
      // Debug what's inside the wrapper
      if (tcWrapper) {
        console.log('[TC Debug] Button inside TC wrapper:', tcWrapper.querySelector('button'));
        console.log('[TC Debug] TC wrapper classes:', tcWrapper.className);
        console.log('[TC Debug] TC wrapper parent:', tcWrapper.parentNode);
      }
    }, 100);
  }

  const handleBookingClick = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }
    
    // Check if on desktop (not in Telegram WebApp and screen is wide enough)
    const isDesktop = !window.Telegram?.WebApp?.initData && window.innerWidth > 768;
    
    if (isDesktop) {
      // Open booking form on desktop
      window.open('https://noteforms.com/forms/bron-stolov-v-vnvnc-concert-hall-moou17', '_blank');
    } else {
      // Use phone number on mobile/Telegram
      if (window.Telegram && window.Telegram.WebApp) {
        window.open('tel:+79214104440', '_blank');
      } else {
        window.location.href = 'tel:+79214104440';
      }
    }
  }

  // Removed unused phone and bot functions

  const openTelegramChannel = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }
    if (window.Telegram?.WebApp && window.Telegram.WebApp.initData) {
      window.Telegram.WebApp.openTelegramLink('https://t.me/vnvncbattlebot');
    } else {
      window.open('https://t.me/vnvncbattlebot', '_blank');
    }
  }


  const toggleEventMute = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }
    setEventVideoMuted(!eventVideoMuted)
  }

  const showFullscreen = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }
    setShowFullscreenVideo(true)
  }

  const closeFullscreenVideo = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }
    setShowFullscreenVideo(false)
  }

  const toggleCircleVideoMute = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }
    setCircleVideoMuted(!circleVideoMuted)
  }

  return (
    <>
      {/* Splash Screen */}
      {showSplash && (
        <div className={`splash-screen ${mediaLoaded ? 'hide' : ''}`}>
          {/* Animated Bubbles for splash */}
          <div className="splash-bubbles-container">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="splash-bubble" 
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>
          <div className="splash-content">
            <img 
              src="/zharaloader.svg" 
              alt="ЖАРА" 
              className="splash-logo"
            />
            <div className="loading-bar">
              <div 
                className="loading-progress" 
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Background Video */}
      <video 
        ref={bgVideoRef}
        className="background-video"
        src="/bgvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />


      {/* Main Content Container */}
      <div className="app-container">
        {/* Summer Logo */}
        <div className="summer-logo">
          <img src={logoImage} alt="VNVNC ЖАРА" className="logo-image" loading="eager" />
        </div>

        {/* Circle Video - Positioned under logo */}
        {circleVideoSrc && (
          <div className={`circle-video-wrapper ${!circleVideoMuted ? 'expanded' : ''}`}>
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
              <video 
                className="event-video"
                src={selectedEvent.video}
                muted={eventVideoMuted}
                loop={true}
                autoPlay={true}
                playsInline
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
              <div className="event-info-content">
                <h3 className="event-title">{selectedEvent.title}</h3>
                <p className="event-date-time">{selectedEvent.date.split(', ')[1].charAt(0).toUpperCase() + selectedEvent.date.split(', ')[1].slice(1)} в {selectedEvent.time}</p>
                
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
              </div>
              
              <div className="event-info-sticky">
                <div 
                  data-tc-event={selectedEvent.tcEvent}
                  data-tc-token={selectedEvent.tcToken}
                  style={{ display: 'inline-block', width: '100%' }}
                >
                  <button 
                    className="buy-ticket-button"
                    style={{ width: '100%' }}
                    onTouchStart={() => {
                      if (window.Telegram?.WebApp?.HapticFeedback) {
                        window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
                      }
                    }}
                  >
                    КУПИТЬ БИЛЕТ
                  </button>
                </div>
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
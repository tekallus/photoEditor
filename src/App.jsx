import { useState } from 'react'
import './styles.css'
export default function App() {
  // 1. filter state ve baslangic degerleri
  const [filter, setFilter] = useState({
    brightness: 1,
    contrast: 1,
    saturation: 1,
  })

  /* Challenge

    Range input'ları henüz hiçbir şey yapmıyor. Sizin göreviniz bunları aşağıdaki gibi çalıştırmaktır: 
    
        1. Kullanıcı range input kaydırıcılarından birini her hareket ettirdiğinde, filter state nesnesindeki karşılık gelen değer, değişmeyen diğer iki değer korunarak input değeri olacak şekilde güncellenmelidir. 
           
        2. Filter state nesnesinin her güncellemesinde, --brightness, --contrast ve 
           --saturation Görüntünün filter özelliklerini kontrol eden CSS değişkenleri, karşılık gelen filter state nesne özelliklerinin değerleri olacak şekilde güncellenmelidir. İlgili CSS, styles.css dosyasının 1-13 satırlarında bulunabilir. 
		                       
        3. Range input'larının başlangıç değerleri, filter state nesnesindeki karşılık gelen özelliklerinin başlangıç değerleri olmalıdır.   
		   
		4. Kodunuzu mümkün olduğunca DRY yapmaya çalışın
*/
  //2. range input degisiminde cagrilacak fonksiyon
  const handleRangeChange = (e) => {
    // secilen inputun adini ve degerini alalim
    const { name, value } = e.target
    //filter state'ini guncelle
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: parseFloat(value), //string degeri float'a cevir
    }))
    //3. css degiskenlerini guncelleme
    updateCssVariables()
  }
  //4.css degiskenlerini guncelleyen fonksiyon yazak
  const updateCssVariables = () => {
    document.documentElement.style.setProperty(
      '--brightness',
      filter.brightness
    )
    document.documentElement.style.setProperty('--contrast', filter.contrast)
    document.documentElement.style.setProperty(
      '--saturation',
      filter.saturation
    )
  }
  return (
    <div className="main-container">
      <h1>
        <span>📷</span> Photo Editörü <span>📷</span>
      </h1>

      <div className="image-container">
        <img src="./images/kunal-goswami-CuUn__aMGD4-unsplash.jpg" />
      </div>

      <form>
        {/* 5. Range input'ları */}
        <label>
          <input
            type="range"
            name="brightness"
            min={0}
            max={2}
            step={0.1}
            value={filter.brightness}
            onChange={handleRangeChange}
          />
          <span>Brightness</span>
        </label>

        <label>
          <input
            type="range"
            name="contrast"
            min={0}
            max={2}
            step={0.1}
            value={filter.contrast}
            onChange={handleRangeChange}
          />
          <span>Contrast</span>
        </label>

        <label>
          <input
            type="range"
            name="saturation"
            min={0}
            max={2}
            step={0.1}
            value={filter.saturation}
            onChange={handleRangeChange}
          />
          <span>Saturation</span>
        </label>
      </form>
    </div>
  )
}

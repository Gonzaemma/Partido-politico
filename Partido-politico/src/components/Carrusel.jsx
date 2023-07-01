import CarrouselStyles from '../styles/Carrousel.module.css'


export default function Carrousel(){
    

/* const slider = document.getElementById("random"); tarea seleccionar el elemento container!!
console.log("soy el log! el slider es: \n", slider)
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    
    slider.scrollLeft = scrollLeft - walk;
}); */

    return(
        <div className={CarrouselStyles.background}>
            <section id="contenedor" className={CarrouselStyles.container}>
                <article className={CarrouselStyles.card}>
                    {/* <div id='random'></div> */}
                    <figure>
                        <img
                            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-
                                clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=
                                st=1687123388~exp=1687123988~hmac=f3410d0a5c2f20aec66c7d763c789bf0aae9c
                                5026366fe41ae7d18e05e7e406b"
                            alt="Preview"
                            title="Preview"
                        />
                    </figure>
                </article>
                <article className={CarrouselStyles.card}>
                    <figure>
                        <img
                            src="https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-
                            mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?w=900&t=
                            st=1687123407~exp=1687124007~hmac=15a1b5a4d3a5af66dfba67bdcd577f769f813
                            bf06fc8b5e50f32f6503099bbd8"
                            alt="Preview"
                            title="Preview"
                        />
                    </figure>
                </article>
                <article className={CarrouselStyles.card}>
                    <figure>
                        <img
                            src="https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=1800&
                            t=st=1687169672~exp=1687170272~hmac=b66f9b9c1e344cbfe6fe2e5f65e94ebb8d418dad
                            2e2af2b892ad9ac60e9eb79c"
                            alt="Preview"
                            title="Preview"
                        />
                    </figure>
                </article>
                <article className={CarrouselStyles.card}>
                    <figure>
                        <img
                            src="https://img.freepik.com/free-photo/pathway-middle-green-leafed-trees-with
                                -sun-shining-through-branches_181624-4539.jpg?w=900&t=st=1687123477~exp=1687124077
                                ~hmac=6e8b1735a2cb25be79f248b6a3307a37a15b080dee114565d01704b97d432a80"
                            alt="Preview"
                            title="Preview"
                        />
                    </figure>
                </article>
            </section>
        </div>
    )
}
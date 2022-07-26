
// traer contenedor

const contenedorProductos = document.getElementById('contenedorProductos');

const carritoContenedor = document.getElementById('carritoContenedor');

const botonVaciar = document.getElementById('vaciarCarrito');

const contadorCarrito = document.getElementById('contadorCarrito');

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal');

let carrito = []

fetch("../data.json")
.then(resp => resp.json())
.then(productos => {
    
    // guardar carrito en local storage
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('carrito')) {
            carrito = JSON.parse(localStorage.getItem('carrito'));
            actualizarCarrito();
        }
    })
    
    botonVaciar.addEventListener('click', () => {
        carrito.length = 0;
        actualizarCarrito();
    })
    
    productos.forEach(producto => {


            
            // diseño de productos en carrito
            
                        let div = document.createElement('div');
                        div.classList.add('producto');
                        div.innerHTML = `
                            <div class="tituloProducto">
                                <div class="iconoContainer">
                                    <img class="icono" src="${producto.icono}">
                                </div>
                                <h2 class="nombreProducto">${producto.nombre}</h2>
                            </div>
                            <div class="imgContenedor">
                                <img src="${producto.img}">
                            </div>
                            <div class="infoProducto">
                                <div class="especificaciones">
                                    <ul class="ul">
                                        <li class="ibu">ibu: ${producto.ibu}</li>
                                        <li class="abv">abv ${producto.ABV}</li>
                                        <li class="cc">cc: ${producto.tamaño}</li>
                                    </ul>
                                </div>
                                <button id="agregar${producto.id}" class="botonAgregar">
                                    <p class="precio">$ ${producto.precio}</p>
                                    <p class="agregarAlCarrito">AGREGAR AL CARRITO</p>
                                </button>
                                <div class="descripcionProducto">
                                    <p class="textoDescriptivo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, at recusandae!</p>
                                </div>
                            </div>
                            `
            
                        contenedorProductos.appendChild(div);
            
                        const boton = document.getElementById(`agregar${producto.id}`);
            
                        boton.addEventListener('click', () => {
                            agregarAlCarrito(producto.id)
            
                            // alerta de producto agregado
                            Swal.fire({
                                position: 'bottom-end',
                                icon: 'success',
                                title: 'Producto agregado al carrito',
                                showConfirmButton: false,
                                timer: 1500,
                                width: '300px',
                            })
            
                        });
    })
            
            
            /*funcion para agregar al carrito*/
            
            const agregarAlCarrito = (prodId) => {
                const existe = carrito.some (prod => prod.id === prodId);
                
                /*si el producto ya está en el carrito, lo suma*/
                if (existe) {
                    const prod = carrito.map (prod => {
                        if (prod.id === prodId) {
                            prod.cantidad++;
                        }
                    });
                    
            
                } else {
                    /*si el producto no está en el carrito, lo agrega*/
                    const item = productos.find((prod) => prod.id === prodId);
                    carrito.push(item);
                }

                actualizarCarrito();
            }
            
            /*funcion para eliminar productos del carrito*/
            
            eliminarDelCarrito = (prodId) => {
                const item = carrito.find((prod) => prod.id === prodId)
                const indice = carrito.indexOf(item);
                carrito.splice(indice, 1);
                actualizarCarrito();
            }
            
            /*funcion para actualizar carrito*/
            
            const actualizarCarrito = () => {
                carritoContenedor.innerHTML = "";
            
                carrito.forEach((prod) => {
            
                    const div = document.createElement('div');
                    div.className = ('productoEnCarrito');
                    div.innerHTML = `
                    <div class="fila">
                        <div class="imagenCarritoContenedor">
                            <img class="imagenCarrito" src="${prod.img}">
                        </div>
                        <div class ="infoProductoCarrito">
                            <p class="nombreProductoCarrito">${prod.nombre}</p>
                            <div class="cantidadCarrito">
                                <p>Cantidad:</p>
                                <p class="cantidadNumero">
                                    <span id="cantidad">${prod.cantidad}</span>
                                </p>
                            </div>
                        <div class="precioCarrito">
                            <p>Precio:</p>
                            <p ><span>${prod.precio}</span></p>
                        </div>
                        <button onclick="eliminarDelCarrito(${prod.id})" class="botonEliminar">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    <div>
                    `
                    carritoContenedor.appendChild(div);
            
                    localStorage.setItem('carrito', JSON.stringify(carrito));
                });
                
                contadorCarrito.innerText = carrito.length;
            
                precioTotal.innerHTML = "$ " + carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
            
            }
    // });

    }).catch(error => console.log(error));

// guardar carrito en local storage





// verificador de edad

// const mayor = document.getElementById("mayorDeEdad");
// const menor = document.getElementById("menorDeEdad");
// document.getElementById("contenedorModal").style.display= "none";
// let validarEdad;
// const validacionStorage = sessionStorage.getItem('validarEdad');


// function abrirVentana() {
//     /*mostrar modal*/
//     document.getElementById("contenedorModal").style.display= "block";
// }

// function respuestaClick () {
//     /*ocultar modal*/
//         contenedorModal.classList.remove('contenedorModal');
// }

// function salirDelSitio () {
//     /*llevar a otro sitio y limpiar storage*/
//     window.location = "https://www.youtube.com/watch?v=ZAAjm4IJhFY";
//     sessionStorage.clear("validarEdad", validarEdad);
// }

// mayor.addEventListener("click", respuestaClick);
// menor.addEventListener("click", salirDelSitio);

// if (validacionStorage) {
//     /*si no está guardado la validacion*/
//     respuestaClick();
//     validarEdad = validacionStorage;
// } else {
//     /*si está guardada la validacion*/
//     validarEdad = setTimeout(abrirVentana, 3000);
//     sessionStorage.setItem("validarEdad", validarEdad);
// }
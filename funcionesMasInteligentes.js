// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

//INTERACTUANDO CON EL HTML
// const coupons = [
//     "Stefanny",
//     "Ariel",
//     "Nico"];

//CUPONES COMO OBJETOS
const coupons = [
    {
        name: "Stefanny",
        discount: 15,
    },
    {
        name: "Ariel",
        discount: 20,
    },
    {
        name: "Nico",
        discount: 25,
    },
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    // const inputDiscount = document.getElementById("inputDiscount");
    // const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    //UTILIZANDO SWITCH

    // let descuento;

    // switch(couponValue){
    //     case "Stefanny":
    //         descuento = 15;
    //     break;
    //     case "Ariel":
    //         descuento = 20;
    //     break;
    //     case "Nico":
    //         descuento = 25;
    //     break;
    // }

    //UTILIZANDO IF

    // if (!coupons.includes(couponValue)) {
    //     alert("El cupón " + couponValue + " no es válido");
    //  } else if (couponValue === "Stefanny") {
    //     descuento = 15;
    //  } else if (couponValue === "Ariel") {
    //     descuento = 20;
    //  } else if (couponValue === "Nico") {
    //     descuento = 25;
    //  }

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}

// console.log(`El precio original es ${precioOriginal}, el precio con descuento es ${precioConDescuento}.`);

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });


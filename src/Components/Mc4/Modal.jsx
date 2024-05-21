import React from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

function Modal({ title, content, onClose, open }) {
  if (!open) return;

  const portalElement = document.getElementById("portal");
  portalElement.style.display = "block";

  function handleClose() {
    portalElement.style.display = "none";
    onClose();
  }

  return (
    <div>
      {createPortal(
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "grey",
          }}
        >
          <div
            style={{
              height: "500px",
              width: "500px",
              background: "white",
              padding: "0.5rem 0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #eee",
              }}
            >
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</p>
              <MdClose
                onClick={handleClose}
                size={"30"}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div
              style={{ overflow: "auto", marginTop: "20px", height: "400px" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo repudiandae, quam cumque inventore architecto libero!
              Quasi doloribus voluptatibus cum illum expedita nesciunt tempora,
              assumenda nobis voluptatem facilis alias reprehenderit odit
              aspernatur optio, iste, dolore voluptas. Modi quod eos nihil
              soluta neque, consequatur dolor veritatis rem? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Aperiam, hic. Adipisci,
              rerum quasi. Nam iusto vero voluptas optio doloribus, molestias
              perferendis nemo alias error corrupti dolor necessitatibus,
              ratione cupiditate qui maxime ullam repellat dolorem et. Velit
              facere pariatur ipsa! Vel, asperiores ex pariatur quis et
              laudantium placeat ducimus voluptate quo. Laboriosam iste
              accusantium voluptatum minima illo recusandae vitae commodi
              architecto harum, nam assumenda culpa. Facere sed hic error nam
              dolorum natus consequuntur totam vitae distinctio accusantium,
              quam aut id voluptatum itaque. Magnam expedita minima veniam!
              Natus perferendis sed ratione placeat blanditiis, explicabo ut ab
              in impedit nam facilis dolore deserunt cupiditate veniam
              recusandae modi at molestiae provident assumenda repellendus
              praesentium quia! Maiores consequuntur aperiam quisquam
              reprehenderit error ipsum perspiciatis tempora esse consequatur
              minus dicta magni officiis numquam dolore officia sint iure beatae
              aut, nostrum, non sunt nobis? Tempora sit dicta cumque eaque sint
              vel voluptate? Ea voluptatibus at maiores neque sunt eaque, quod
              veritatis aperiam. Accusamus suscipit distinctio dolor, doloribus
              veniam doloremque at ipsam repellat provident voluptatibus omnis,
              enim maiores aliquid eum ad natus temporibus, aspernatur itaque
              corrupti minima voluptatem amet. Ipsam fuga autem voluptates
              dolorum eum enim, quis laborum reprehenderit aut voluptate
              officiis, veniam commodi porro earum. Ullam corrupti nihil
              voluptatibus recusandae nulla ut enim amet optio autem molestiae
              nobis rerum ratione tempore error doloribus quia rem perspiciatis
              aliquid repellendus asperiores explicabo aliquam, ad minima
              quisquam. Commodi laboriosam, molestiae a suscipit qui pariatur?
              Voluptatibus, eaque. Sint eaque eius vero delectus explicabo
              soluta nobis quibusdam.
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  padding: "0.5rem 0.5rem",
                  border: "1px solid #eee",
                  width: "150px",
                  cursor: "pointer",
                }}
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        portalElement
      )}
    </div>
  );
}

export default Modal;

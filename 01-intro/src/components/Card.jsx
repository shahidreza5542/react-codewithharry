import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div class="nft-card-container">
            <div class="nft-card">
                <div class="nft-image-container">
                    <img
                        src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                        alt="test"
                        class="nft-image"
                    />
                </div>
                <div class="nft-details">
                    <div class="nft-header">
                        <h1 class="nft-title">Bored ape nft accidental</h1>
                        <h1 class="nft-price-label">Price</h1>
                    </div>
                    <div class="nft-info">
                        <p class="nft-id">#345</p>
                        <p class="nft-price-value">0.01</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card

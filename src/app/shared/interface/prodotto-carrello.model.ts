export interface IProdottoCarrello {
        id: number
        nome: string
        categoria: string
        prezzo: number
        taglie_disponibili: string[]
        colori_disponibili: string[]
        descrizione: string
        immagine: string
        nuovo_arrivi: boolean
        best_seller: number
        taglia_selezionata: string
        colore_scelto: string
}
import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rendering : false,
            jumlah : 0,
            pesan : ""
        }
        this.pilihPesanan = this.pilihPesanan.bind(this);
        this.nasiPadang = this.nasiPadang.bind(this);
        this.sate = this.sate.bind(this);
        this.soto = this.soto.bind(this);
        this.uduk = this.uduk.bind(this);
        this.kuning = this.kuning.bind(this);
        this.batal = this.batal.bind(this);
    }
    // dynamic method
    pilihPesanan(value, e) {
        this.setState({[value] : e.target.value, rendering: true});
    }

    nasiPadang () {
        this.setState({
            pesan: "Nasi Padang",
            jumlah: this.state.jumlah + 1,
            rendering: true
        })
    }
    sate() {
        this.setState({
            pesan: "Sate",
            jumlah: this.state.jumlah + 1,
            rendering: true
        })
    }
    soto() {
        this.setState({
            pesan: "Soto Ayam Lamongan",
            jumlah: this.state.jumlah + 1,
            rendering: true
        })
    }
    uduk() {
        this.setState({
            pesan: "Nasi Uduk",
            jumlah: this.state.jumlah + 1,
            rendering: true
        })
    }
    kuning() {
        this.setState({
            pesan: "Nasi Kuning",
            jumlah: this.state.jumlah + 1,
            rendering: true
        })
    }
    batal() {
        this.setState({
            pesan: " ",
            jumlah: 0,
            rendering: false
        })
    }
    render() {
        return (
            <div>
                <h3>Daftar Makanan yang kami sediakan : </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                            <ListMakanan LinkImg = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                            <center>
                                <button onClick={(e)=> this.nasiPadang (e)}>Pesan Sekarang</button>
                            </center>
                            </td>
                            <td>
                            <ListMakanan LinkImg = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                            <center>
                                <button onClick={(e) => this.sate (e)}>Pesan Sekarang</button>
                            </center>
                            </td>
                            <td>
                            <ListMakanan LinkImg = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                            <center>
                                <button onClick={(e) => this.soto (e)}>Pesan Sekarang</button>
                            </center>
                            </td>
                            <td>
                            <ListMakanan LinkImg = "https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                            <center>
                                <button onClick={(e) => this.uduk (e)}>Pesan Sekarang</button>
                            </center>
                            </td>
                            <td>
                            <ListMakanan LinkImg = "https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg" />
                            <center>
                                <button onClick={(e) => this.kuning (e)}>Pesan Sekarang</button>
                            </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <input type="text" placeholder="Masukan Pesanan Anda" onChange={(e) => this.pilihPesanan ("pesan", e)} />
                <input type="number" placeholder="Jumlah Pesanan" onChange={(e) => this.pilihPesanan("jumlah", e)} />
                <button onClick={(e) => this.batal (e)}>Batalkan Semua Pesanan</button>

                {this.state.rendering === true ? (
                    <div>
                        <h3>Pesanan Anda : {this.state.pesan}</h3>
                        <h4>Jumlah Pesanan : {this.state.jumlah}</h4>
                    </div>
                ) : (
                    <div>
                        <center>
                            <h1>Anda belum memesan</h1>
                        </center>
                    </div>
                )}
            </div>
        )
    }
}

export default MenuMakanan;
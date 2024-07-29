create database DatVeMayBay
use DatVeMayBay

create table HanhKhach
(
	MaHK int identity primary key,
	TenKhachHang nvarchar(30),
	NgaySinh date,
	SoDienThoai char(10),
	Taikhoan varchar(30),
	MatKhau varchar(30),
	GioiTinh char(5)
)
create table SanBay
(
	MaSBay char(5) primary key,
	TenSBay Nvarchar (30),
	TenTinhThanh NvarChar(30)
)
create table ThongTinChuyenBay
(
	MaCB char(5) primary key,
	TenCB nvarchar(30),
	NgayCatCanh date,
	GioCatCanh Time,
	NgayHaCanh date,
	GioHaCanh time,
	MaSBayDi char(5) references SanBay(MaSBay),
	MaSBayDen char(5) references SanBay(MaSBay), 
	GheLoai1 varchar (30),
	GheLoai2 varchar (30),
	SoLuongVe int,
	GiaGheLoai1 int,
	GiaGheLoai2 int
)
create table Ve 
(
	MaVe int identity primary key,
	ThoiGianDat Date,
	ThoiGianDi Date,
	LoaiGhe char(30),
	GiaGhe int,
	SoLuong int,
	MaCB char(5) references ThongTinChuyenBay(MaCB),
	MaHK int  references HanhKhach(MaHK)
)

create table AdminUser
(
	Id int identity primary key,
	TaiKhoan char(20),
	MatKhau char(20)
)
create table FormLienHe
(
	MaForm int identity primary key,
	HoTen Nvarchar(30),
	Gmail varchar(30),
	TieuDe Nvarchar(30),
	VanDe Nvarchar(max)
)
/*create table HanhKhach
(
	MaHK int identity primary key,
	TenKhachHang nvarchar(30),
	NgaySinh date,
	SoDienThoai char(10),
	Taikhoan varchar(30),
	MatKhau varchar(30),
	GioiTinh char(5)
)*/
insert into HanhKhach(TenKhachHang,NgaySinh,SoDienThoai,Taikhoan,Matkhau,GioiTinh) values
(N'Ngô Quang Vinh','2003-06-06','0812495201','acc1','123','Nam'),
(N'Lê Minh Tùng','2004-11-29','0812495202','acc2','123','Nu'),
(N'Trần Phi Phụng','2004-1-25','0812495204','acc3','123','Nam'),
(N'Đoàn Quỳnh Như','2005-11-10','0812495208','acc4','123','Nam'),
(N'Trần Thị Diễm Sương','2004-12-29','0812495202','acc5','123','Nam');
/*
create table Ve 
(
	MaVe int primary key identity(1,1),
	ThoiGianDat DateTime,
	ThoiGianDi DateTime,
	Hang_Ghe char(10), vip 
	Gia int,
	MaHK int references HanhKhach(MaHK),
)
*/

/*
MaSbay int primary key identity(1,1),
	TenSBay Nvarchar (30),
	TenTinhThanh NvarChar(30)
*/
insert into SanBay(MaSbay,TenSBay,TenTinhThanh) values 
('SBLD',N'Sân bay Lâm Đồng',N'Lâm Đồng'),
('SBH',N'Sân bay Huế',N'Huế'),
('SBDN',N'Sân bay Đà nẵng',N'Đà Nẵng'),
('SBHN','Sân bay Hà Nội',N'Hà Nội'),
('SBHCM','Sân bay HCM',N'Thành Phố HCM');

/*
	create table ThongTinChuyenBay
(
	MaCB char(5) primary key,
	TenCB nvarchar(30),
	NgayCatCanh datetime,
	GioCatCanh Time,
	NgayHaCanh datetime,
	GioHaCanh time,
	MaSBayDi char(5) references SanBay(MaSBay),
	MaSBayDen char(5) references SanBay(MaSBay),
	MaVe char(5) references Ve(MaVe), 
	GheLoai1 varchar (30),
	GheLoai2 varchar (30),
	GiaGheLoai1 int,
	GiaGheLoai2 int
)
*/
insert into ThongTinChuyenBay(MaCB,TenCB,NgayCatCanh,GioCatCanh,NgayHaCanh,GioHaCanh,MaSBayDi,MaSBayDen,GheLoai1,GheLoai2,SoLuongVe,GiaGheLoai1,GiaGheLoai2) values 
('CB001',N'Lâm Đồng - HCM','2023-08-09 ','21:00:00','2023-08-09','22:30:00','SBLD','SBHCM','ThuongGia','BinhThuong',100,'2000000','3000000'),
('CB002',N'Huế - HCM','2023-08-09 ','22:00:00','2023-08-09 ','23:30:00','SBH','SBHCM','ThuongGia','BinhThuong',100,'1000000','500000'),
('CB003',N'Đà Nẵng - Hà Nội','2023-08-09','23:00:00','2023-08-09','1:30:00','SBDN','SBHN','ThuongGia','BinhThuong',100,'1000000','500000'),
('CB004',N'Hà Nội - Lâm Đồng','2023-08-09','10:00:00','2023-08-09 ','11:30:00','SBHN','SBLD','ThuongGia','BinhThuong',100,'2000000','3000000'),
('CB005',N'HCM - Đà Nẵng','2023-08-09 ','11:00:00','2023-08-09 ','12:30:00','SBHCM','SBDN','ThuongGia','BinhThuong',100,'2000000','3000000');


/*
	create table ChiTietChuyenBay
(
	MoTa Nvarchar(max),
	MaCB int references ThongTinChuyenBay(MaCB),
	MaSBay int references SanBay(MaSBay)
)
*/


/*
create table FormLienHe
(
	MaForm char(5) primary key,
	HoTen Nvarchar(30),
	TieuDe Nvarchar(30),
	VanDe Nvarchar(max)
)
*/
insert into FormLienHe(HoTen,Gmail,TieuDe,VanDe) values
(N'Trần Tấn Bảo','bao@gmail.com',N'Feedback trang web',N'Quá tuyệt vời!!'),
(N'Trần Thị Như','nhu@gmail.com',N'Feedback trang web',N'Quá tuyệt vời!! Nên mua iphone 15 promax titanium ở đâu'),
(N'Trần Thị Phụng','phung@gmail.com',N'Feedback trang web',N'Quá tuyệt vời!! Làm sao để trở nên xinh đẹp hơn')
insert into AdminUser(TaiKhoan,MatKhau) values
('admin','1234567');
insert into Ve(ThoiGianDat,ThoiGianDi,LoaiGhe,GiaGhe,SoLuong,MaCB,MaHK) values 
('2023-02-12 ','2023-08-09 ','BinhThuong',3000000,1,'CB001',1),
('2023-04-23 ','2023-08-09 ','BinhThuong',3000000,1,'CB002',2),
('2023-05-23 ','2023-08-09','BinhThuong',3000000,1,'CB003',3),
('2023-06-14 ','2023-08-09','BinhThuong',3000000,1,'CB004',1),
('2023-07-15','2023-08-09','BinhThuong',3000000,1,'CB005',2);
select* from AdminUser
select* from ThongTinChuyenBay
select* from Ve
select* from SanBay
select* from HanhKhach
select * from FormLienHe
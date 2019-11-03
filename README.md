
=======
# **Cafe114-client**


서울 지역의 24시 카페 (탐앤탐스, 할리스 등)의 실시간 현황 알림 서비스 Cafe114 Client Repository

## Screens

### Logged Out:

    - [ ] [Home](#home)
    - [ ] [CafeDetail](#cafe-detail)
    - [ ] [Messages](#messages)
    - [ ] [Phone Login](#login)
    - [ ] Verify Phone Number
    - [ ] Social Login
    - [ ] [Signup](#signup)

### Logged In:

    - [ ] [Home](#home)
    - [ ] [Edit Account](#mypage)
    - [ ] Settings
    - [ ] Saved Places
    - [ ] Send messages
    - [ ] Search, Messages History

---

## **Home**

### **1. UI**

24시간 운영하는 탐앤탐스 & 할리스 지도 구현 (지역은 서울로 한정)

![Home-Local](/assets/UI/01-Home.jpg)

비회원 로그인시 24시 운영되는 카페 리스트 및 최신 정보의 간략한 정보만 열람 가능 (몇분 전 최신글이 올라왔는지)

![Home-Default](/assets/UI/02-Home-Default.jpg)

흡연 가능 여부, 주차 가능 여부, 단체석 여부 및 이용 가능 좌석 확인 가능한 필터링 기능 제공

![Home-Filter](/assets/UI/03-Home-Filter.jpg)

### **2. Components**

- [ ] Search
- [ ] Toggle Group

  - [ ] mypage-btn
  - [ ] zoom-in-btn
  - [ ] zoom-out-btn
  - [ ] sync-btn
  - [ ] current-location-btn
  - [ ] filter-btn

---

## **Cafe Detail**

### **1. UI**

카페 클릭시 카페 정보 열람 가능 ( DB에 저장해둔 자료 기반으로 제공)

![Cafe-Detail](/assets/UI/04-Home-CafeDetail.jpg)

### **2. Components**

- [ ] Search Select Group
  - [ ] phone-call-btn
  - [ ] messages-btn
  - [ ] options-btn
- [ ] Image Slide
- [ ] Text Content

---

## **Messages**

### **1. UI**

실시간 카페 현황, 자리 현황에 대해 간단한 코멘트 남길 수 있는 채팅 기능 추가

![Messages](/assets/UI/05-Home-Messages.jpg)

### **2. Components**

---

## **Mypage**

## **Login**

## **Signup**

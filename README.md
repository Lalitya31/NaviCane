# NaviCane
### 🔐 AI-Powered Multi-Sensor Safety Monitoring System

An intelligent, privacy-first **edge AI surveillance system** built using the **AMB82-MINI IoT platform**, combining real-time object detection with multi-sensor validation for accurate and reliable safety monitoring.

---

## 🚀 Overview

This project implements a **real-time safety monitoring system** that performs **on-device AI inference** using a lightweight YOLOv7-tiny model, eliminating the need for cloud-based processing.

Unlike traditional surveillance systems, this solution:

* Runs entirely on-device (Edge AI)
* Uses **sensor fusion** to reduce false alarms
* Maintains **user privacy** by avoiding continuous cloud streaming
* Provides optional **remote monitoring support**

---

## 🧠 Key Features

* 🎯 **On-device AI Detection** using YOLOv7-tiny (NPU accelerated)
* 🔍 **Multi-Sensor Fusion**

  * Camera (visual detection)
  * Ultrasonic Sensor (distance validation)
  * LDR (ambient light adaptation)
* ⚡ **Real-Time Processing** with FreeRTOS multitasking
* 🔐 **Privacy-First Architecture**

  * No continuous cloud dependency
* 📡 **RTSP Streaming** for local monitoring
* ☁️ **Optional Cloud Integration**

  * Event-based alerts (no raw video streaming)

---

## 🏗️ System Architecture

```
Camera → AI Inference (YOLOv7-tiny on NPU)
        ↓
Sensor Inputs (Ultrasonic + LDR)
        ↓
Multi-Modal Sensor Fusion
        ↓
Decision Logic
        ↓
Buzzer Alert + RTSP Stream
        ↓
(Optional) Cloud Alerts / Logging
```

---

## 🔄 Working Pipeline

### 🟢 Hardware + AI Flow

1. System initializes with FreeRTOS
2. Camera captures live frames
3. YOLOv7-tiny detects objects (person/object)
4. Ultrasonic sensor validates physical presence
5. LDR adjusts detection based on lighting
6. Sensor fusion confirms valid detection
7. Buzzer alert is triggered
8. Live feed streamed via RTSP

---

### 🔵 Software Pipeline

1. Frame capture from camera
2. Image preprocessing (resize, normalize)
3. AI inference on NPU
4. Bounding box + confidence generation
5. Post-processing (Non-Max Suppression)
6. Processed stream output
7. Display via VLC / client

---

## 🔐 Privacy Design

> **AI decides locally. Cloud only informs — never controls.**

* No continuous video upload
* All inference happens on-device
* Optional cloud sends only:

  * detection events
  * metadata
  * optional snapshots

---

## 🧰 Tech Stack

* **Hardware:** AMB82-MINI IoT Board
* **AI Model:** YOLOv7-tiny
* **RTOS:** FreeRTOS
* **Sensors:**

  * HC-SR04 Ultrasonic Sensor
  * LDR
* **Streaming:** RTSP
* **Optional Cloud:** Firebase / GCloud
* **Development:** Arduino IDE

---

## 📡 Optional Cloud Architecture

```
Device → Detection Event → Cloud (Firebase)
                         ↓
                Store Metadata / Alerts
                         ↓
                   Mobile App / Dashboard
```

---

## 📦 Components

* AMB82-MINI Board (with NPU)
* Camera Module (JXF37)
* HC-SR04 Ultrasonic Sensor
* LDR Sensor
* Piezoelectric Buzzer
* Power Supply (5V)

---

## 📊 Performance

* ⏱️ Detection Response Time: ~1–2 seconds
* 🎯 Detection Accuracy: ~90% (YOLOv7-tiny)
* 📏 Distance Accuracy: <2% error margin
* 🌗 Works in low and bright light conditions

---

## 💡 Use Cases

* 🏠 Smart Home Security
* 🏭 Industrial Safety Monitoring
* 👵 Elderly / Caretaker Assistance
* 🚶 Women Safety Systems
* 🐾 Wildlife Monitoring
* 🛍️ Retail Footfall Detection

---

## 🔮 Future Enhancements

* 📱 Mobile App Integration
* 📡 GSM-based alert system (offline alerts)
* 🎤 Audio detection support
* 🧠 Custom-trained object models
* 🔋 Battery optimization
* 📊 Cloud analytics dashboard

---

## 🧪 Project Status

✔ Prototype built and tested
✔ Real-time detection validated
✔ Multi-sensor integration complete
🔄 Cloud + app layer in progress

---

## 👥 Contributors

* Krish Sharma
* Lalitya Dodla
* Karthikeyan Kalimuthu
* Tejdeep Singh

---

## 📜 License

This project is developed for academic and research purposes.
Further licensing and commercialization subject to patent processing.

---

## ⭐ Final Note

This project demonstrates how **edge AI + sensor fusion + privacy-first design** can create smarter, faster, and more reliable safety systems without relying on the cloud.

---


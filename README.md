# 🧠 Depression Detection Web App

A full-stack machine learning web application to detect signs of depression from tweets or user-entered thoughts using a trained Logistic Regression model. The app is built using **Flask (Python)** for backend and **React (JavaScript)** for frontend. The machine learning model is trained on a cleaned and processed version of a Twitter-based depression dataset.

---

## 🔍 Project Overview

- Preprocessed and trained on tweet-based mental health dataset
- Built using `pandas`, `scikit-learn`, `nltk`, and `XGBoost`
- Vectorized using **CountVectorizer**
- Trained models: `Logistic Regression`, `XGBoost`, `KNN` — best accuracy selected
- Backend uses **Flask API** to predict depression
- Frontend uses **React** to allow users to input thoughts and get predictions

---

## 🛠 Technologies Used

| Component    | Tech Stack                          |
|--------------|--------------------------------------|
| Frontend     | React, HTML, CSS                    |
| Backend      | Flask, Flask-CORS                   |
| ML Model     | Logistic Regression (sklearn)       |
| Vectorizer   | CountVectorizer                     |
| Model Format | `.pickle`                           |
| Dataset      | Depression Dataset from Twitter     |

---

## 🚀 Project Setup

### 📂 Clone the Repository

```bash
git clone https://github.com/your-username/depression-detector-app.git
cd depression-detector-app

🔧 Backend Setup (Flask + Python)

    Install required packages:

pip install flask flask-cors pandas scikit-learn xgboost nltk

    Make sure the following files exist in the backend folder:

        logistic.pickel – Trained model

        vector_conversion.pickel – CountVectorizer object

    Start the Flask server:

python app.py

This will run the backend on http://localhost:5000
🖥️ Frontend Setup (React)

    Navigate to the React app directory (e.g., client/):

cd client

    Install dependencies:

npm install

    Start the development server:

npm start

This runs the frontend on http://localhost:3000
⚙️ How It Works

    User enters a thought in the React frontend.

    React sends a POST request to the Flask backend at /predict.

    Flask loads the vectorizer.pickle and logistic.pickle, transforms the input, and returns a prediction (0 or 1).

    The React UI displays:

        🎉 "Cheers, You're Not Depressed!!" if prediction is 1

        🫂 "Ooh Sorry, You're Depressed!! We will get through this together :)" if prediction is 0

📊 Data Preprocessing & Training Steps (Done in Colab)

    Loaded and cleaned Twitter depression dataset

    Replaced target label 4 with 1 for binary classification

    Cleaned text (stopwords, special characters, @users, URLs)

    Word clouds for positive and negative examples

    Tokenization and lemmatization using nltk

    Vectorized tweets using CountVectorizer

    Trained and evaluated:

        Logistic Regression

        XGBoost

        KNN

    Saved final model and vectorizer using pickle	
	
🧪 Example

Input:

    "I feel broken and empty"

Output:

    🫂 "Ooh Sorry, You're Depressed!! We will get through this together :)"

📂 Folder Structure

depression-detector-app/
├── app.py                     # Flask backend
├── logistic.pickel            # Trained model
├── vector_conversion.pickel   # Vectorizer
├── /client                    # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── README.md

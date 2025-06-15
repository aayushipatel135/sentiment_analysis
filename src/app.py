from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Load model and encoder once during startup
encoder = pickle.load(open("encoder.pickle", "rb"))
model = pickle.load(open("model.pickle", "rb"))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    tweet = data.get('desc', '')
    
    if not tweet:
        return jsonify({'error': 'No input provided'}), 400

    vect_tweet = encoder.transform([tweet])
    output = model.predict(vect_tweet)[0]

    # result_text = (
    #     "😞 Ooh Sorry, You're Depressed!! 💙  We will get through this together :) 🫂"
    #     if output == 0
    #     else "🎉  Cheers, You're Not Depressed!! 😊"
    # )

    return jsonify({'result': int(output)})

if __name__ == '__main__':
    app.run(debug=True)

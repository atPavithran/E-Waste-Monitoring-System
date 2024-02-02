body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    display: flex;
}

.sidebar {
    width: 60px;
    background-color: #333;
    color: white;
    padding: 20px;
    position: relative;
    transition: width 0.3s;
}

.sidebar:hover {
    width: 200px;
}

.sidebar-image {
    background-image: url('path/to/your/image.jpg');
    background-size: cover;
    width: 100%;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 20px;
}

.sidebar-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar li {
    margin-bottom: 10px;
}

.sidebar a {
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px;
    border-radius: 5px;
}

.sidebar a:hover {
    background-color: #555;
}

.main-content {
    flex: 1;
    padding: 20px;
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

.dashboard-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
}

.dashboard-card {
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    width: 300px;
    text-align: center;
}

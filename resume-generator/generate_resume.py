import json
import argparse
import os
from datetime import datetime
from jinja2 import Environment, FileSystemLoader
from weasyprint import HTML

def generate_pdf(json_path: str, template_path: str):
    """
    Generates a PDF resume from a JSON data file and a Jinja2 template.

    Args:
        json_path (str): The path to the JSON data file.
        template_path (str): The path to the HTML template file.
    """
    # Validate input paths
    if not os.path.exists(json_path):
        print(f"Error: JSON file not found at {json_path}")
        return
    if not os.path.exists(template_path):
        print(f"Error: Template file not found at {template_path}")
        return

    print("Loading data and template...")

    # Load the JSON data
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Set up Jinja2 environment
    template_dir = os.path.dirname(template_path)
    template_filename = os.path.basename(template_path)
    env = Environment(loader=FileSystemLoader(template_dir))
    template = env.get_template(template_filename)

    # Render the HTML with the data
    print("Rendering HTML from template...")
    rendered_html = template.render(data)

    # Generate the output filename
    full_name = data.get('personalDetails', {}).get('fullName', 'resume').replace(' ', '_')
    template_name = os.path.splitext(template_filename)[0]
    current_date = datetime.now().strftime("%Y-%m-%d")
    output_filename = f"{full_name}_{template_name}_{current_date}.pdf"

    # Generate the PDF
    print(f"Generating PDF: {output_filename}...")
    html = HTML(string=rendered_html)
    html.write_pdf(output_filename)

    print(f"✅ Successfully created {output_filename}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate a PDF resume from a JSON file and an HTML template.")
    parser.add_argument("json_file", help="Path to the input JSON data file (e.g., resume_data.json).")
    parser.add_argument("template_file", help="Path to the HTML template file (e.g., templates/simple.html).")

    args = parser.parse_args()

    generate_pdf(args.json_file, args.template_file)